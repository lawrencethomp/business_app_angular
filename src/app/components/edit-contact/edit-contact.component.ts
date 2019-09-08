import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetContactService } from '../../services/contact/get-contact.service';
import { Contact } from '../../models/contact/contact.model';
import { ContactSerializer } from '../../models/contact/contact.serializer.model';
import { map } from 'rxjs/operators';
// TODO: add preferences
// TODO: update response should support editing location.
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  contactId: string;
  contact: Contact;
  serializer = new ContactSerializer();

  constructor(
      private route: ActivatedRoute,
      private getContactService: GetContactService
  ) { 
    this.contactId = this.route.snapshot.params.id;
    this.getContactDetail(this.contactId);
  }

  ngOnInit() {
    // this.contactId = this.route.snapshot.params.id;
    // this.getContactDetail(this.contactId);
  }
  getContactDetail(contactId: String) {
    this.getContactService.getContact(contactId)
      .subscribe(
        (res) => {
          this.contact = this.serializer.fromJson(res);
          // console.log(res);
          console.log(this.contact.firstName);
        }
      )
        // .map(
        //   (data) => {this.contact = this.serializer.fromJson(data)}));
        // console.log(this.contact);
      //   .subscribe((res) => {
      //     this.contact = res;
      //     console.log(this.contact);
      //     console.log(this.contact.constructor.name);
      // });
  }
  editContact(form: NgForm) {
    this.getContactService.editContact(form, this.contactId)
      .subscribe(
        res => {
          console.log(res);
          console.log(name);
        },
        err => {
          console.log('Error occurred');
        });
  }
}
