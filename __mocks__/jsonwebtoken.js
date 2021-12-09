module.exports = {
  token: 'any_token',

  sign (key, secret) {
    return this.token
  }
}
