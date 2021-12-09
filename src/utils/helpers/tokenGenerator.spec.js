const jwt = require('jsonwebtoken')
class TokenGenerator {
  constructor (secret) {
    this.secret = secret
  }

  async generate (key) {
    return jwt.sign(key, this.secret)
  }
}

const makeSut = () => {
  return new TokenGenerator('secret')
}

describe('Token Generator', () => {
  test('Should return null if JWT returns null', async () => {
    const sut = makeSut()
    jwt.token = null
    const token = await sut.generate('any_key')
    expect(token).toBeNull()
  })

  test('Should return a token if JWT returns token', async () => {
    const sut = makeSut()
    const token = await sut.generate('any_key')
    expect(token).toBe(jwt.token)
  })

  test('Should call JWT with correct values', async () => {
    const sut = makeSut()
    await sut.generate('any_key')
    expect(jwt.key).toBe('any_key')
    expect(jwt.secret).toBe(sut.secret)
  })
})
