import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Contact } from '../models/contact/contact.model';
@Injectable()
export class CampaignService {
  campaignData = [];

  /* 
  Used to transport Used Contacts from the Contact List to the Campaign Component.
  */


constructor() { }


addContact(contact: Contact) {
  this.campaignData.push(contact);
}

removeContact(contact: Contact, id: String) {
  _.remove(this.campaignData, function() {
    return contact._id === id;
  });
}
}
