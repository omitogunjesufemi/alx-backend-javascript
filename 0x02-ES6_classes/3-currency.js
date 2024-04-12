export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    if (value) {
      this._code = value;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value) {
      this._name = value;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
