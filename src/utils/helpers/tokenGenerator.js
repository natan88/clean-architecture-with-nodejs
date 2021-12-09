const jwt = require('jsonwebtoken')
const MissingParamError = require('../erros/missingParamError')

module.exports = class TokenGenerator {
  constructor (secret) {
    this.secret = secret
  }

  async generate (key) {
    if (!this.secret) {
      throw new MissingParamError('secret')
    }

    if (!key) {
      throw new MissingParamError('key')
    }

    return jwt.sign(key, this.secret)
  }
}
