/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {CommandOption} from './command-option';
import {CommandArgument} from './command-argument';

export class Command {
  private _name: string;
  private _syntax: string[] = [];
  private _description: string;
  private _commandOptions: CommandOption[] = [];
  private _commandArguments: CommandArgument[] = [];

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get syntax(): string[] {
    return this._syntax;
  }

  set syntax(value: string[]) {
    this._syntax = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get commandOptions(): CommandOption[] {
    return this._commandOptions;
  }

  set commandOptions(value: CommandOption[]) {
    this._commandOptions = value;
  }

  get commandArguments(): CommandArgument[] {
    return this._commandArguments;
  }

  set commandArguments(value: CommandArgument[]) {
    this._commandArguments = value;
  }
}
