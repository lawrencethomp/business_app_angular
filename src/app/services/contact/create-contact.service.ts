import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response} from '@angular/http';
import * as moment from 'moment';
import * as request from 'request';
import { first } from 'rxjs/operators/first';
@Injectable()
export class CreateContactService {

  constructor() { }

  createContact(form: NgForm) {

  }

  geocodeAddressBuilder(form: NgForm) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?`;
    const address = `address=${form.value.address.split(' ').join('+')},`;
    const city = `+${form.value.city.split(' ').join('+')},`;
    const state = `+${form.value.state.toUpperCase()}`;
    const key = `&key=AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
    const geocodeCall = `${url}${address}${city}${state}${key}`;
    return geocodeCall;
  }
}
