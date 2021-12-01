module.exports = class ServerError extends Error {
  constructor (paramName) {
    super('Internal error123')
    this.name = this.constructor.name
  }
}
