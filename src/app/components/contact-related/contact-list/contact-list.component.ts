import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../../../services/data.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from '../../../../../apiConfig';
import {GetContactService} from '../../../services/contact/get-contact.service';
import { ContactSerializer } from '../../../models/contact/contact.serializer.model';
import { Contact } from '../../../models/contact/contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  constructor(private http: HttpClient,
              private dataService: DataService,
              private getContactService: GetContactService
            ) { }
  contactsInitiated = false;
  contacts: Object = [ ];
  serializer = new ContactSerializer();
  loadingScreen: boolean = false;
  pageNo: number = 1;
  changingPage: boolean = false;
  triggerChange: boolean = false;
  direction: string;
    triggerLengthChange: boolean = false;

  // sends the contacts in length

  // contact list is going to need the observable. a million contacts straight up sucks to have subscribables.
  @Output()
  contactsLength: number;
  //TODO: Troubleshoot pagination
  getContacts(page)  {
    console.log(page);
    this.triggerLoading();
    let contactRequest = [];
    return this.getContactService.getAllContacts(page)
      .subscribe((res: any) => {
        this.triggerLoading();
        // tslint:disable-next-line:forin tslint:disable-next-line:no-var-keyword
        for (var position in res.message) {
          let contact = new Contact('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
          contact = this.serializer.fromJson(res.message[position]);
          contactRequest.push(contact);
        }
        this.contacts = contactRequest;
        // this.contactsLength = this.contacts.length;
        this.contactsLength = this.dataService.contactsLengthServiceNo;
        this.dataService.contactsLengthServiceNo = contactRequest.length;
        const contLength = contactRequest.length;
        this.dataService.contactsLengthServiceNo = contLength;
        this.pageNo = page;
        console.log(` contact length ${this.dataService.contactsLengthServiceNo}`);
            console.log(`page no in service ${this.dataService.pageNoServiceNo}`);
        console.log(this.pageNo);
      });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async triggerLoading() {
    if (this.loadingScreen === false) {
      this.loadingScreen = true;
      return await this.sleep(500);
    }
    if (this.loadingScreen === true) {
      this.loadingScreen = false;
      return await this.sleep(500);
    }
  }

  ngOnInit() {
    this.dataService.loadContacts.subscribe(contactsInitiated => {
        this.contactsInitiated = contactsInitiated;
        if (this.contactsInitiated === true) {
            this.getContacts(this.pageNo);
        }
    });

    this.dataService.paginateData.subscribe(changingPage => {
      this.changingPage = changingPage;
      if (this.changingPage === true) {
        console.log('check');
          this.pageNo++;
          console.log(this.pageNo);
          this.getContacts(this.pageNo);
      }
    });
    this.dataService.sendContactLength.subscribe(triggerLengthChange => {
      
    })
  }

}
