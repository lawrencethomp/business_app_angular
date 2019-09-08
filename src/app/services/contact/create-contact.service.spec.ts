import { TestBed, inject } from '@angular/core/testing';

import { CreateContactService } from './create-contact.service';

describe('CreateContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateContactService]
    });
  });

  it('should be created', inject([CreateContactService], (service: CreateContactService) => {
    expect(service).toBeTruthy();
  }));

  it('should be able to create a Geocode', function() {

  });

  it('should be able to parse an Address', function() {

  });

  it('should be able to create a contact', function() {

  });
});
