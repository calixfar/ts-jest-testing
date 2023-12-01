export class InvalidStringError extends Error {
  constructor() {
    super('Pass a valid string')
  }
}