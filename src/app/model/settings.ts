export class Settings {
  private _addComments: boolean;
  private _useLongOptions: boolean;

  constructor() {
    this._addComments = false;
    this._useLongOptions = false;

  }

  get addComments(): boolean {
    return this._addComments;
  }

  set addComments(value: boolean) {
    this._addComments = value;
  }

  get useLongOptions(): boolean {
    return this._useLongOptions;
  }

  set useLongOptions(value: boolean) {
    this._useLongOptions = value;
  }
}
