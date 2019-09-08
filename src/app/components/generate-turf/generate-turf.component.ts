import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {
    Http, 
    Response, 
    RequestOptions, 
    Headers
} from '@angular/http';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-generate-turf',
  templateUrl: './generate-turf.component.html',
  styleUrls: ['./generate-turf.component.scss']
})
@Injectable()
export class GenerateTurfComponent implements OnInit {

  constructor(
      private http: Http,
      private dataService: DataService
  ) { }
  data: Object;
  contactsInitiated = false;
  @Output() paginateEvent: EventEmitter<string> = new EventEmitter();
  ngOnInit() {
    this.dataService.loadContacts.subscribe(contactsInitiated => {
      this.contactsInitiated = contactsInitiated;
    });
  }

  paginateMongo( direction: string) {
    if (direction === 'forward') {
      this.dataService.paginateMongoForward();
    }
    if (direction === 'backward') {
      this.dataService.paginateMongoBackward();
    }
  }

  getContacts() {
    this.dataService.initContacts();
  }
  // send request to grab contacts
  contactRequest() { }

  sendMapData() {
    this.dataService.sendQueryInformation();
  }
 

}
