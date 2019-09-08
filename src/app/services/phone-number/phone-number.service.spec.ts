import { TestBed, inject } from '@angular/core/testing';
import { PhoneNumberService } from './phone-number.service';
const phoneNumber = `6033692893`;
const phoneNumberShort = `603369289`;
const phoneNumberLong = `60336928931`;
const phoneNumberLetter = `603369289a`;
const phoneNumberSym = `603369289@`;
describe('PhoneNumberService', () => {
  let service: PhoneNumberService;
  beforeEach(() => {
    service = new PhoneNumberService();
  });

  it('should make sure that a number has 10 digits', function() {
    expect(service.parseNumber(phoneNumber)).toBe(true);
  });
  it('should make sure that a number cannot be under 10 digits', function() {
    expect(service.parseNumber(phoneNumberShort)).toBe(`Enter a valid number.`);
  });
  it('should make sure that a number cannot be over 10 digits', function() {
    expect(service.parseNumber(phoneNumberLong)).toBe(`Enter a valid number.`);
  })
  it('should only be able to have numbers', function() {
    expect(service.parseNumber(phoneNumber)).toBe(true);
  });
  it('should not be able to have letters', function(){
    expect(service.parseNumber(phoneNumberLetter)).toBe("Not a valid number.");
  });
  it(`should not be able to have symbols`, function(){
    expect(service.parseNumber(phoneNumberSym)).toBe("Not a valid number.");
  })
  it('should be able to format a number to (xxx) xxx-xxxx', function() {
    expect(service.formatNumber(phoneNumber, 'paren')).toBe(`(603) 369-2893`);
  });
  it('should be able to format a number to xxx-xxx-xxxx', function() {
    expect(service.formatNumber(phoneNumber, 'dash')).toBe(`603-369-2893`);
  });
});
