import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddressService } from '../../../services/address.service';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.scss']
})
export class CreateContactComponent implements OnInit {
  contactLat: string;
  contactLng: string;

  constructor(private addressService: AddressService) { }

  ngOnInit() {
  }

  async addContact(form: NgForm, callback: any) {
    this.addressService.parseAddress(form, 'callback');
  }

}
