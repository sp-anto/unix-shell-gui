/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CommandService} from './service/command.service';
import {Command} from './model/command';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private command: Command;
  private commands: Command[];
  private selectedCommand: string;
  private selectedSyntax: string;
  private settings: object;
  private arguments: object[];
  private console: string;
  private operator: object;
  private operators: object[] = [{name: '\\n', replace: '\n', description: 'New Line'},
    {name: '|', description: 'Pipe commands'}, {name: '&&', description: 'Logical AND'}, {name: '||', description: 'Logical OR'},
    {name: '-eq', description: 'Is equal to'}, {name: '-ne', description: 'Is not equal to'}, {name: '-gt', description: 'Is greater than'},
    {name: '-gt', description: 'Is greater than or equals to'}, {name: '-lt', description: 'Is less than'},
    {name: '-le', description: 'Is less than or equal to'}];
  private structures: object[] = [{name: 'if-then-elif-fi'}, {name: 'while-do-done'}, {name: 'case-esac'}];
  private isOptionMultiple: boolean;
  private isOptionOptional: boolean;

  constructor(private commandService: CommandService) {
  }

  ngOnInit() {
    this.console = '';
    this.commandService.getAll()
      .subscribe(commands => this.commands = commands);
    this.selectedCommand = '';
    this.settings = this.readSettingsCookies();
  }

  ngAfterViewInit() {
    this.midDivHeight();
    window.onresize = (ev: KeyboardEvent): any => {
      this.midDivHeight();
    };
  }

  fetchCommandDocumentation(): void {
    this.command = null;
    this.operator = this.operators.find((val) => val['name'] === this.selectedCommand);
    if (this.selectedCommand !== '' && !this.operator) {
      this.commandService.getCommandByName(this.selectedCommand)
        .subscribe(command => {
          this.command = command;
          this.selectSyntax(command.syntaxes[0]);
        });
    }
  }

  selectSyntax(syntax: string): void {
    // initialize options from previous selection
    for (const option of this.command.options) {
      option.isSelected = false;
      option.value = null;
      option.isDisabled = null;
    }

    this.selectedSyntax = syntax;
    const syntaxArgs = syntax.replace(this.command.name, '');
    let args = syntaxArgs.split(' ');
    const options = args.find(value => value.includes('OPTION'));
    if (options) {
      this.isOptionMultiple = options.includes('...');
      this.isOptionOptional = options.includes('[') && options.includes(']');
    } else {
      this.command.options.forEach(value => value.isDisabled = true);
      this.isOptionMultiple = true;
      this.isOptionOptional = true;
    }
    args = args.filter(arg => arg.indexOf('OPTION') < 0 && arg !== '');

    this.arguments = [];
    for (const arg of args) {
      const isMultiple = arg.includes('...');
      const isOptional = arg.includes('[') && arg.includes(']');
      const name = arg.replace('...', '').replace('[', '').replace(']', '');

      let isOption = false;
      if (name.includes('-')) {
        let optName = name.replace('-', '').replace('-', '');
        if (optName.includes('\u003d')) {
          optName = optName.substring(0, optName.indexOf('\u003d'));
        }
        isOption = true;
        if (!isOptional) {
          const preselectedOption = this.command.options.find(value => optName === value.name || optName === value.equivalent);
          preselectedOption.isSelected = true;
          preselectedOption.isDisabled = true;
        }
      }
      this.arguments.push({isMultiple: isMultiple, isOptional: isOptional, name: name, arg: arg, isOption: isOption});
    }
  }

  optionClicked(option): void {
    if (option.isSelected) {
      option.value = null;
    }
  }

  midDivHeight(): void {
    const topDivHeight = $('#topDiv').height();
    const bottomDivHeight = $('#bottomDiv').height();
    const windowHeight = $(window).height();
    $('#middleDiv').height(windowHeight - topDivHeight - bottomDivHeight);
  }

  readSettingsCookies(): object {
    const settingsInCookie = document.cookie;
    if (settingsInCookie) {
      return JSON.parse(settingsInCookie);
    }
    return {addComments: false, useLongOptions: false};
  }

  setSettings(option: string): void {
    if (this.settings[option]) {
      this.settings[option] = false;
    } else {
      this.settings[option] = true;
    }
    document.cookie = JSON.stringify(this.settings);
  }

  copyConsole(text: string): void {
    $('#copyHelper').val(text);
    $('#copyHelper').select();
    document.execCommand('copy');
  }

  isInputFocused(): boolean {
    return $('#console').is(':focus');
  }

  insertCommandToConsole(): void {
    const command = this.buildCommad();

    const start = $('#console').prop('selectionStart');
    const end = $('#console').prop('selectionEnd');

    let result = this.console.substring(0, start);
    result += command + this.console.substring(end);
    this.console = result;
  }

  buildCommad(): string {
    if (this.command) {
      let optionsStr = '';
      for (const option of this.command.options) {
        if (option.isSelected) {
          if ((this.settings['useLongOptions'] && option.isLong) || (option.isLong && !option.equivalent)) {
            optionsStr += '--' + option.name + (option.value ? '=' + option.value : '') + ' ';
          } else if (option.isLong) {
            optionsStr += '-' + option.equivalent + (option.value ? ' ' + option.value : '') + ' ';
          } else {
            optionsStr += '-' + option.name + (option.value ? ' ' + option.value : '') + ' ';
          }
        }
      }
      let buildedCommand = this.selectedSyntax;

      for (const arg of this.arguments) {
        let argValue = '';
        if (arg['value']) {
          argValue = arg['value'];
        }
        buildedCommand = buildedCommand.replace(arg['arg'], argValue);
      }

      buildedCommand = buildedCommand.replace('[OPTION]...', optionsStr).replace('[OPTION]', optionsStr)
        .replace('OPTION...', optionsStr).replace('OPTION', optionsStr);
      buildedCommand = buildedCommand.replace(/ +/g, ' ');
      buildedCommand = buildedCommand.trim();

      // use comments if user has set the relevant option
      let comment = '';
      if (this.settings['addComments']) {
        const shortDescription = this.command.shortDescription;
        comment = '# ' + shortDescription.substring(0, 1).toUpperCase() + shortDescription.substring(1) + '\n';
        for (const option of this.command.options) {
          if (option.isSelected) {
            if (this.settings['useLongOptions'] && option.isLong || (option.isLong && !option.equivalent)) {
              comment += '# --' + option.name + ' ' + option.description + '\n';
            } else if (option.isLong) {
              comment += '# -' + option.equivalent + ' ' + option.description + '\n';
            } else {
              comment += '# -' + option.name + ' ' + option.description + '\n';
            }
          }
        }
      }

      return comment + buildedCommand;
    } else if (this.operator) {
      return this.operator['replace'] ? this.operator['replace'] : this.operator['name'];
    }
    return '';
  }

  copyCurrentCommand(): void {
    this.copyConsole(this.buildCommad());
  }

  optionsError(): string {
    if (!this.isOptionOptional) {
      const selCom = this.command.options.find(value => value.isSelected);
      if (!selCom) {
        return 'At least one option must be selected. ';
      }
    }
    if (!this.isOptionMultiple) {
      if (this.command.options.filter(value => value.isSelected).length > 1) {
        return 'Only one must be selected ';
      }
    }
    return '';
}
}
