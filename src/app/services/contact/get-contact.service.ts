import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../../../../apiConfig';
import {Contact} from '../../models/contact/contact.model';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import * as moment from 'moment';
import { Response } from '@angular/http';
import {ContactSerializer} from '../../models/contact/contact.serializer.model';
@Injectable()
export class GetContactService {
  contactInfo: Object = {};
  private httpClient: HttpClient;
  private serializer = new ContactSerializer();
  // id: String;
  // TODO: remove login related logic
  // TODO: Form logic to stop repeating myself
  constructor(private _http: HttpClient) {}
  // grab the code from the prev request in component.

  contactUrl = `${apiUrl}/contacts`;

  getContact(id): Observable<Contact> {
    return this._http.get<Contact>(`${this.contactUrl}/${id}`);
  }
  // TODO: implement QueryOptions
  getAllContacts(pageNo: number) {
    return this._http
      .get<Contact[]>(`${this.contactUrl}?pageNo=${pageNo}&size=25`);
  }

  editContact(form: NgForm, id) {
    const now: string = moment().format().toString();
    return this._http.put(`${this.contactUrl}/${id}`, {
      firstName: form.value.firstName,
         lastName: form.value.lastName,
         address: form.value.address,
         email: form.value.email,
         phonenumber : form.value.phonenumber,
         lastEdited : now,
         pronoun: form.value.pronoun,
         additionalNotes: form.value.additionalNotes,
         editedBy: 'LT',
      }, {observe: 'response'});
  }

  deleteContact(id) {
    return this._http
      .delete(`${this.contactUrl}/${id}`, {observe: 'response'});
  }

  createContact(form: NgForm, lat, lng) {
    const now: string = moment().format().toString();
    return this._http
      .post(`${this.contactUrl}`, {
        firstName: form.value.firstName,
        lastName: form.value.lastName,
        address: form.value.address,
        phonenumber: form.value.phonenumber,
        email: form.value.email,
        city: form.value.city,
        state: form.value.state,
        timeAdded: now,
        pronoun: form.value.pronoun,
        additionalNotes: form.value.additionalNotes,
        geoLocation_lat: lat,
        geoLocation_lng: lng,
        preferences: {
          votedInMidterms : form.value.voted,
          politicalViews : form.value.politicalView,
          supportM4A : form.value.supportM4A,
          supportACA : form.value.supportACA,
          incomeLevel: form.value.incomeLevel,
        },
        addedBy: 'LT',
      }, {observe: 'response'}
      );
  }

}
