import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {apiUrl} from './../../../apiConfig';
import { NgForm } from '@angular/forms';

@Injectable()
export class SearchService {

  constructor(private _http: HttpClient) {}
  searchUrl = `${apiUrl}/search`;

  searchContacts(form: NgForm) {
    return this._http.post(`${this.searchUrl}`, {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      phoneNumber: form.value.phoneNumber,
      zipcode: form.value.zipcode
    }, {observe: 'response'}
    );
  }

}
