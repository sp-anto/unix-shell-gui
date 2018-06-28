/*
 *This file is licensed under the terms of the Apache License 2.0
 */

import {Option} from './option';

export class Command {
  private _name: string;
  private _shortDescription: string;
  private _longDescription: string;
  private _syntaxes: string[] = [];
  private _options: Option[] = [];

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get shortDescription(): string {
    return this._shortDescription;
  }

  set shortDescription(value: string) {
    this._shortDescription = value;
  }

  get longDescription(): string {
    return this._longDescription;
  }

  set longDescription(value: string) {
    this._longDescription = value;
  }

  get syntaxes(): string[] {
    return this._syntaxes;
  }

  set syntaxes(value: string[]) {
    this._syntaxes = value;
  }

  get options(): Option[] {
    return this._options;
  }

  set options(value: Option[]) {
    this._options = value;
  }
}
