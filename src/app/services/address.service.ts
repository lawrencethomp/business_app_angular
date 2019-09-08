import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as request from 'request';
import {GetContactService} from './contact/get-contact.service';

@Injectable()
export class AddressService {
  contactLat: string;
  contactLng: string;
  constructor(
    private getContactService: GetContactService
  ) { }

  geocodeAddressBuilder(form: NgForm) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?`;
    const address = `address=${form.value.address.split(' ').join('+')},`;
    const city = `+${form.value.city.split(' ').join('+')},`;
    const state = `+${form.value.state.toUpperCase()}`;
    const key = `&key=AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
    const geocodeCall = `${url}${address}${city}${state}${key}`;
    return geocodeCall;
  }

  async parseAddress(form: NgForm, callback: any) {
    request({
      url: this.geocodeAddressBuilder(form),
      json: true
    }, (error: any, response: any, body: any) => {
      if (error) {
      callback('Unable to connect to Google servers.');
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address.');
    } else if (body.status === 'OK') {
      this.contactLat = body.results[0].geometry.location.lat;
      this.contactLng = body.results[0].geometry.location.lng;
      this.getContactService.createContact(form, this.contactLat, this.contactLng)
      .subscribe( res => {
        console.table(res.status);
      },
      err => {
        console.log('Error occurred');
      }
    );
    }
});
}


}
