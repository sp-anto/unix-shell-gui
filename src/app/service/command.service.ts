/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {Injectable} from '@angular/core';
import {Command} from '../model/command';
import {CommandDocumentationService} from './command-documentation.service';
import {CommandOption} from '../model/command-option';

@Injectable()
export class CommandService {
  readonly USAGE_CONST: string = 'Usage:';
  readonly OR_CONST: string = 'or:';
  readonly OPTIONS_START_CONST: string = 'Mandatory arguments to long options are mandatory for short options too.';

  constructor(private commandDocumentationService: CommandDocumentationService) {
  }

  public getCommandByName(name: string): Promise<Command> {
    let callBack;
    const commandPromise = new Promise<Command>(resolve => callBack = resolve);
    const documentationPromise = this.commandDocumentationService.getCommandDocumentation(name).toPromise();
    documentationPromise.then(value => {
      const com = this.extractCommandInfo(name, value);
      callBack(com);
    });
    return commandPromise;
  }

  private extractCommandInfo(name: string, documentation: string): Command {
    const command = new Command();
    command.name = name;
    const documentationLines = documentation.split('\n');

    // read syntax lines and remove the lines from the array
    command.syntax = this.readSyntax(documentationLines);

    // read description
    command.description = this.readDescription(documentationLines);

    // read options
    command.commandOptions = this.readOptions(documentationLines);

    return command;
  }

  private readSyntax(lines: string[]): string[] {
    const syntax: string[] = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line.startsWith(this.USAGE_CONST)) {
        syntax.push(line.replace(this.USAGE_CONST, '').trim());
      } else if (line.startsWith(this.OR_CONST)) {
        syntax.push(line.replace(this.OR_CONST, '').trim());
      } else {
        lines.splice(0, i);
        break;
      }
    }
    return syntax;
  }

  private readDescription(lines: string[]): string {
    let description = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === this.OPTIONS_START_CONST) {
        lines.splice(0, i + 1);
        break;
      } else if (line) {
        description += line + ' ';
      }
    }
    description = description.substring(0, description.length - 1);
    return description;
  }

  private readOptions(lines: string[]): CommandOption[] {
    const commandOptions: CommandOption[] = [];
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      if (!line) {
        break;
      } else if (line.startsWith('-')) {
        let token = line.substring(0, line.indexOf(' '));
        line = line.replace(token, '').trim();
        token = token.replace(',', '');
        if (line.startsWith('--')) {
          line = line.substring(line.indexOf(' ')).trim();
        }
        const commandOption = new CommandOption(token, line);
        commandOptions.push(commandOption);
      } else {
        console.log(line);
        commandOptions[commandOptions.length - 1].description += ' ' + line;
      }
    }
    return commandOptions;
  }

}

