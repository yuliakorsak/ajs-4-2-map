export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Character is already in your team'],
      [2, 'Character data missing'],
      [3, 'This character type cannot use this item'],
    ]);
  }
  translate(code) {
    const errorText = this.errors.get(code);
    return (errorText === undefined ? 'Unknown error' : errorText);
  }
}