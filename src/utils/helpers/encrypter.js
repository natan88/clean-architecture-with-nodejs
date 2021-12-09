const bcrypt = require('bcrypt')

module.exports = class Encrypter {
  async compare (value, hash) {
    return bcrypt.compare(value, hash)
  }
}
