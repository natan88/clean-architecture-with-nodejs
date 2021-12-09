module.exports = {
  token: 'any_token',
  key: '',
  secret: '',

  sign (key, secret) {
    this.key = key
    this.secret = secret
    return this.token
  }
}
