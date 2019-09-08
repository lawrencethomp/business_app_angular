import { TestBed, inject } from '@angular/core/testing';

import { EmailServiceService } from './email-service.service';

describe('EmailServiceService', () => {
  let service: EmailServiceService;
  beforeEach(() => {
    service = new EmailServiceService();
    TestBed.configureTestingModule({
      providers: [EmailServiceService]
    });
  });

  it('should be created', inject([EmailServiceService], (service: EmailServiceService) => {
    expect(service).toBeTruthy();
  }));
  it('should be able to handle a proper email', function(){
    expect(service.validateEmail('lawrencethomp@gmail.com')).toBe(true);
  });
  it('should be able to deny an email without an @', function(){
    expect(service.validateEmail('lawrencethompgmail.com')).toBe(false);
  });
  it('should be able to deny an email without a .' , function(){
    expect(service.validateEmail('lawrencethomp@gmailcom')).toBe(false);
  });
  it('should be able to deny an email without the pre section' , function(){
    expect(service.validateEmail('@gmail.com')).toBe(false);
  });
  it('should be able to deny an email without the addr section' , function(){
    expect(service.validateEmail('lawrencethomp')).toBe(false);
  });
  it('should be able to deny an email without the domain section' , function(){
    expect(service.validateEmail('lawrencethomp@.com')).toBe(false);
  });
  it('should be able to deny an email that looks like a website' , function(){
    expect(service.validateEmail('lawrencethomp.com')).toBe(false);
  });
  
});
