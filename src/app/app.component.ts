/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {Component, OnInit} from '@angular/core';
import {CommandService} from './service/command.service';
import {Command} from './model/command';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private command: Command;
  private commands: Command[];
  private selectedCommand: string;
  private selectedSyntax: string;

  constructor(private commandService: CommandService) {
  }

  ngOnInit() {
    this.commandService.getAll()
      .subscribe(commands => this.commands = commands);
    this.selectedCommand = '';
  }

  fetchCommandDocumentation(): void {
    this.command = null;
    if (this.selectedCommand !== '') {
      this.commandService.getCommandByName(this.selectedCommand)
        .subscribe(command => {
          this.command = command;
          this.selectSyntax(command.syntaxes[0]);
        });
    }
  }

  removeDuplicateOptions(): void {
    const optionsToRemove = [];
    for (let i = 0; i < this.command.options.length; i++) {
      const option = this.command.options[i];
      if (this.isNotEquivalentOfOther(option)) {
        optionsToRemove.push(i);
      }
    }

    for (let i = optionsToRemove.length - 1 ; i >= 0; i--) {
      this.command.options.splice(i, 1);

    }
  }

  selectSyntax(syntax): void {
    this.selectedSyntax = syntax;

    for (const option of this.command.options) {
      option.isSelected = false;
      option.value = null;
    }

  }

  isNotEquivalentOfOther(optionToCheck): boolean {
    for (const option of this.command.options) {
      if (optionToCheck.name === option.equivalent) {
        return true;
      }
    }
    return false;
  }

  optionClicked(option): void {
    if (option.isSelected) {
      option.value = null;
    }
  }

}
