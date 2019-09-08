import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { apiUrl } from '../../../../../apiConfig';
import 'rxjs/add/operator/map';

// import googleMapsClient = require('@google/maps');
import { GoogleMaps } from 'svelte-google-maps-embed';
import {
  BrowserModule,
  DomSanitizer
} from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';
import { Observable } from 'rxjs';
import { Contact } from '../../../models/contact/contact.model';




@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.scss']
})
export class ContactdetailComponent implements OnInit {

  //TODO: create an object that uses this.
  apiLink = `https://www.google.com/maps/embed/v1/place?key=`;
  queryBuilder: string;
  apiKey = `AIzaSyBFj0EJm83C3LBt4alXp7z5kBQycQKHXF4`;
  builtLink = `${this.apiLink}${this.apiKey}${this.queryBuilder}`;
  url: string = this.builtLink;
  urlSafe: SafeResourceUrl;
  lat: number;
  lng: number;


  contactId: string;
  contactDetail: Object = { };



  constructor(private route: ActivatedRoute,
              private http: Http,
              private sanitizer: DomSanitizer
             ) {}

  ngOnInit() {
    this.contactId = this.route.snapshot.params.id;
    this.getContactDetail(this.contactId);
  }

  getContactDetail(contactId) {
    return this.http
      .request(`${apiUrl}/contacts/${contactId}`)
// .map((res: Response) => res.json().response.map((contact: Contact) => new Contact().deserialize(contact)));
      .subscribe((res) => {
        this.contactDetail = res.json();
        if (this.contactDetail.hasOwnProperty('geoLocation_lat')) {
          this.lat = parseFloat(this.contactDetail['geoLocation_lat']);
          console.log(this.lat);
        }
        if (this.contactDetail.hasOwnProperty('geoLocation_lng')) {
          this.lng = parseFloat(this.contactDetail['geoLocation_lng']);
          console.log(this.lng);
        }
        this.queryBuilder = `&q=${this.lat},${this.lng}`;
        this.builtLink = `${this.apiLink}${this.apiKey}${this.queryBuilder}`;
        this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.builtLink);
        console.log(this.contactDetail);
      });
  }
}
