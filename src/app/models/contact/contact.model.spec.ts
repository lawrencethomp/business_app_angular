// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import {Contact} from './contact.model';

// describe('Testing the Contact Model', () => {
//     let model: Contact;
//     beforeEach(async()=> {
//         model = new Contact(
//             'Lawrence',
//             'Thompson',
//             '86 Liberty Street',
//             'lawrencethomp@gmail.com',
//             '6033692893',
//             'He',
//             'cool',
//             '43.00885590000001, -71.44774689999997'
//         );
//     });
//     it('Should be able to get First Name', function() {
//         expect(model.firstName).toBe('Lawrence');
//     });
//     it('Should be able to set First Name', function() {});
//     it('Should be able to get Last Name', function() {
//         expect(model.lastName).toBe('Thompson');
//     });
//     it('Should be able to set Last Name', function() {});
//     it('Should be able to get Address', function() {
//         expect(model.address).toBe('86 Liberty Street');
//     });
//     it('Should be able to set Address', function() {});
//     it('Should be able to get email', function() {
//         expect(model.email).toBe('lawrencethomp@gmail.com');
//     });
//     it('Should be able to set email', function() {
//         model.email = 'lawrencethomp@gmail.com'
//     });
//     it('Should be able to get phone number', function() {
//         expect(model.phoneNumber).toBe('6033692893');
//     });
//     it('Should be able to set phone number', function() {
//         model.phoneNumber = '6033692894';
//         expect(model.phoneNumber).toBe('6033692894');
//     });
//     it('Should be able to get someones pronoun', function() {
//         expect(model.pronoun).toBe('He');
//     });
//     it('Should be able to set someones pronoun', function() {
//         model.pronoun = 'She';
//         expect(model.pronoun).toBe('She');
//     });
//     it('Should be able to get notes about someone', function() {
//         expect(model.additionalNotes).toBe('cool');
//     });
//     it('Should be able to set notes about someone', function() {
//         model.additionalNotes = 'great';
//         expect(model.additionalNotes).toBe('great');
//     });
//     it('Should be able to get Latitude and Longitude', function() {
//         expect(model.geoLocation).toBe('43.00885590000001, -71.44774689999997');
//     });
//     it('Should be able to get Latitude', function() {
//         expect(model.getLatitude('latitude')).toBe('43.00885590000001');
//     });
//     it('Should be able to get Latitude', function() {
//         expect(model.getLatitude('longitude')).toBe('-71.44774689999997');
//     });
//     it('Should have a generated ID', function() {
//         const objectID = model.objectID;
//         expect(typeof objectID).toBe('string');
//         expect(objectID.length).toBe(7);
//     });

// });
