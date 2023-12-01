import { PASSWORD_ERRORS, PasswordChecker } from "../../app/password-checker/password-checker"

describe('PasswordChecker test suite', () => {
  let sut: PasswordChecker

  beforeEach(() => {
    sut = new PasswordChecker()
  })

  it('Should return false is password length is less than 8 characteres', () => {
    const actual = sut.checkPassword('abcdefg')

    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PASSWORD_ERRORS.SHORT)
  })

  it('Should return true is password length is equal or greater than 8 characteres', () => {
    const actual = sut.checkPassword('12345678')

    expect(actual.reasons).not.toContain(PASSWORD_ERRORS.SHORT)
  })

  it('Should return false if password has no upperCase character', () => {
    const actual = sut.checkPassword('abc')

    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PASSWORD_ERRORS.NO_UPPER_CASE)
  })

  it('Should return true if password has at least one upperCase character', () => {
    const actual = sut.checkPassword('abC')

    expect(actual.reasons).not.toContain(PASSWORD_ERRORS.NO_UPPER_CASE)
  })

  it('Should return false if password has no lowerCase character', () => {
    const actual = sut.checkPassword('ABC')

    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PASSWORD_ERRORS.NO_LOWER_CASE)
  })

  it('Should return true if password has at least one upperCase character', () => {
    const actual = sut.checkPassword('ABc')

    expect(actual.reasons).not.toContain(PASSWORD_ERRORS.NO_LOWER_CASE)
  })
  
  it('Complex password to be valid', () => {
    const actual = sut.checkPassword('123456Ab')

    expect(actual.valid).toBe(true)
    expect(actual.reasons).toHaveLength(0)
  })

  it('Admin password with no number is invalid', () => {
    const actual = sut.checkAdminPassword('abc')

    expect(actual.valid).toBe(false)
    expect(actual.reasons).toContain(PASSWORD_ERRORS.NO_NUMBER)
  })

  it('Admin password with number is valid', () => {
    const actual = sut.checkAdminPassword('123456Ab')

    expect(actual.valid).toBe(true)
    expect(actual.reasons).toHaveLength(0)
  })
})