
import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Rx} from 'rxjs';
import {Observable} from 'rxjs/Observable';
import { Output } from '@angular/core';
import { apiUrl } from '../../../apiConfig';

@Injectable()
export class DataService {
data: Object;
contactsInitiated = false;
campaignMapString = false;
campaignData = [];
queryBuilder: string = ''
pageNoServiceNo: number = 1;
changingPage: boolean = false;
triggerChange: boolean = false;

// show the changes in the pageNumbers
triggerLengthChange: boolean;
contactsLengthServiceNo: number;


decreasedState: boolean = false;
deletedItem: number;

@Output() loadContacts: EventEmitter<boolean> = new EventEmitter();
@Output() generateQueryString: EventEmitter<boolean> = new EventEmitter();
@Output() paginateData: EventEmitter<boolean> = new EventEmitter();

@Output() sendContactLength: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: Http) { }
  getContacts() {
    // return this.http
    //   .get(`${apiUrl}/contacts`)
    //   .do((res) => {
    //     this.data = res.json();
    //     console.log(this.data);
    //     console.log(`${this.data[0].name} cool`);
    //     console.log(this.data[0].phone_number);
    //     return this.data;
    //   })
    //   .catch(this.handleError);
  }



  sendContactLengthInfo(){
    // this.triggerLengthChange = true;
    this.sendContactLength.emit(this.triggerLengthChange);
  }

  // TODO: Refine QueryBuilder 
  buildQueryInformation(campaignContacts) {
    let queryString: string = '&q=';
    for  (var i = 0; i < campaignContacts.length; i++) {
      queryString += `${campaignContacts[i].geoLocation_lat},${campaignContacts[i].geoLocation_lng}`;
    }
    this.queryBuilder = queryString;
  }

  sendQueryInformation() {
    this.campaignMapString = true;
    this.buildQueryInformation(this.campaignData);
    this.generateQueryString.emit(this.campaignMapString);
  }

  // changePage() {
  //   if (this.changingPage === true) {
  //     this.changingPage = false;
  //   }
    
  // }

  
  // TODO: Switch paginateMongo into its own service.

  paginateMongoForward() {
    console.log('here')
    this.changingPage = true;
    this.paginateData.emit(this.changingPage);
  }

  paginateMongoBackward() {
    this.changingPage = true;
    this.paginateData.emit(this.changingPage);
  }

  // TODO: Switch contact logic.
  addContact(contact) {
    this.campaignData.push(contact);
  }

  initContacts() {
    this.contactsInitiated = true;
    this.loadContacts.emit(this.contactsInitiated);
  }



  private handleError(error: Response) {
    return Observable.throw(error.statusText);
  }


}
