import { Injectable } from '@angular/core';

@Injectable()
export class PhoneNumberService {

  constructor() {

  }
  /*
    parseNumber - Makes sure that the number is a valid phone number
  */
    parseNumber(number: String) {
      // check the string length
      const numbers = /^[0-9]+$/;
      if (number.match(numbers)) {
      return (number.length === 10 ? true: 'Enter a valid number.' );
  } else {
    return 'Not a valid number.';
  }
    }
  /*
    formatNumber - format number to be presented
      in a better fashion when needed.
  */
    formatNumber(number: String, style: String) {
        switch(style) {
          case 'paren':
            return `(${number.slice(0,3)}) ${number.slice(3, 6)}-${number.slice(6,10)}`;
          case 'dash':
            return `${number.slice(0,3)}-${number.slice(3, 6)}-${number.slice(6,10)}`;
        };
      } 
}
