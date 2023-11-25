import { StringUtils, getStringInfo, toUpperCase } from "../app/utils"

describe('Utils test suite', () => {
  it('should return uppercase', () => {
    expect(toUpperCase('test')).toBe('TEST')
  })

  it('should return info for valid string', () => {
    const actual = getStringInfo('My-String')

    expect(actual.characters).toEqual(
      expect.arrayContaining(['S', 't', 'r'])
    )

    expect(actual.extraInfo).toBeDefined()
  })

  describe('StringUtils tests', () => {
    let sut

    beforeEach(() => {
      sut = new StringUtils()
    })

    it('should throw error on invalid argument', () => {

      expect(() => sut.toUpperCase('')).toThrow('Pass a valid string')
    })

    it.each([
      { input: 'abc', expected: 'ABC' },
      { input: 'def', expected: 'DEF' },
      { input: 'xyz', expected: 'XYZ' },
    ])('should return $expected from input $input', ({ input, expected }) => {
      expect(sut.toUpperCase(input)).toBe(expected)
    })
  })
})