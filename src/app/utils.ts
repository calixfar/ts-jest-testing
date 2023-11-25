export function toUpperCase (arg: string) {
  return arg.toUpperCase()
}



export interface StringInfo {
  lowerCase: string,
  upperCase: string,
  characters: string[],
  length: number,
  extraInfo: Object | undefined
}

export class StringUtils {
  toUpperCase(arg: string) {
    return toUpperCase(arg)
  }
}

export function getStringInfo(arg: string): StringInfo {
  return {
    lowerCase: arg.toLowerCase(),
    upperCase: arg.toUpperCase(),
    characters: Array.from(arg),
    length: arg.length,
    extraInfo: {}
  }
}