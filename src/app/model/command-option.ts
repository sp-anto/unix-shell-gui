export class CommandOption {
  private _token: string;
  private _description: string;

  constructor(token: string, description: string) {
    this._token = token;
    this._description = description;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
