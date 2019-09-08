import { Injectable } from '@angular/core';

@Injectable()
export class EmailServiceService {

  constructor() { }

  /**
   * @function validateEmail - Checks to see if an email is validated.
   * @param email - The email address to check.
   * @returns Boolean - Valid Email or invalid.
   */
  validateEmail(email): boolean {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (email.search(emailRegex) === -1 ) {
      return false;
    }
    return true;
  }

}
