// import { TestBed, inject } from '@angular/core/testing';

// import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// import { GetContactService } from './get-contact.service';
// import { Subscription } from 'rxjs';
// import {HttpClient} from '@angular/common/http';

// describe('Service: GetContactService', () => {
//   let getContactService: GetContactService;
//   let httpMock: HttpTestingController;
//   let httpClient: HttpClient;
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports : [
//         HttpClientTestingModule
//       ],
//       providers: [
//         ContactService
//         ]
//     });
//     getContactService = TestBed.get(ContactService);
//     httpMock = TestBed.get(HttpTestingController);

//   });
//   it('should be created', inject([ContactService], (service: GetContactService) => {
//     expect(service).toBeTruthy();
//   }));

//   fit('Should be able to get an individual Contact', () => {
//     inject([HttpClientTestingModule, ContactService], 
//       (httpMock: HttpTestingController, service: GetContactService) => {
//         service.getContact('5be73ad71024e74d6c8b58dd').subscribe(data => {
//           const contactInfo = data;
//           this.contactInfo = data;
//           expect(data).toBe(typeof Object);
//           expect(contactInfo.firstName).toBe('Lawrence');
//         })
//       });
//     const id: String = '5be73ad71024e74d6c8b58dd';
//     // expect(contact).toBe(typeof Subscription);
//     // console.log(contact.contactInfo);
//     // expect(contact.firstName).toBe('Lawrence');
//     expect(1 + 1).toBe(2);
//   });
//   it('should be able to make an API call', function() {


//   });

//   // let contactRequest = httpMock.expectOne('../../../assets/contactMock.json');

//   it('should be able to return a contact', function () {

//   });


// });
