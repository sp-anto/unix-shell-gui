/*
 *This file is licensed under the terms of the Apache License 2.0
 */

export class Option {
  private _name: string;
  private _argumentType: string;
  private _equivalent: string;
  private _description: string;
  private _isLong: boolean;
  private _isSelected: boolean;
  private _value: string;

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get argumentType(): string {
    return this._argumentType;
  }

  set argumentType(value: string) {
    this._argumentType = value;
  }

  get equivalent(): string {
    return this._equivalent;
  }

  set equivalent(value: string) {
    this._equivalent = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get isLong(): boolean {
    return this._isLong;
  }

  set isLong(value: boolean) {
    this._isLong = value;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }
}
