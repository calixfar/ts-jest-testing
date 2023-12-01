export enum PASSWORD_ERRORS {
  SHORT = 'Password is too short',
  NO_UPPER_CASE = 'Upper case letter required',
  NO_LOWER_CASE = 'Lower case letter required',
  NO_NUMBER = 'Must have at least a number'
}

export interface CheckResult {
  valid: boolean,
  reasons: PASSWORD_ERRORS[]
}

export class PasswordChecker {
  public checkPassword (password: string): CheckResult {
    const reasons: PASSWORD_ERRORS[] = []
  
    this.checkForLength(password, reasons)
    this.checkForUpperCase(password, reasons)
    this.checkForLowerCase(password, reasons)

    return {
      valid: !(reasons.length > 0),
      reasons
    }
  }

  public checkAdminPassword (password: string): CheckResult {
    const basicChek = this.checkPassword(password)

    this.checkForNumber(password, basicChek.reasons)

    return {
      valid: !(basicChek.reasons.length > 0),
      reasons: basicChek.reasons
    }
  }

  private checkForNumber (password: string, reasons: PASSWORD_ERRORS[]) {
    if (!/\d/.test(password)) {
      reasons.push(PASSWORD_ERRORS.NO_NUMBER)
    }
  }

  private checkForLength (password: string, reasons: PASSWORD_ERRORS[]) {
    if (password.length < 8) {
      reasons.push(PASSWORD_ERRORS.SHORT)
    }
  }

  private checkForUpperCase (password: string, reasons: PASSWORD_ERRORS[]) {
    if (password === password.toLowerCase()) {
      reasons.push(PASSWORD_ERRORS.NO_UPPER_CASE)
    }
  }

  private checkForLowerCase (password: string, reasons: PASSWORD_ERRORS[]) {
    if (password === password.toUpperCase()) {
      reasons.push(PASSWORD_ERRORS.NO_LOWER_CASE)
    }
  }
}