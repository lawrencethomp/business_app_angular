import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CampaignComponent } from './campaign.component';
import { DataService } from '../../../services/data.service';
import { Http } from '@angular/http';
import { Sanitizer } from '@angular/core';
import { CampaignService } from '../../../services/campaign.service';
import { DomSanitizer } from '@angular/platform-browser';

let dataService: DataService;
let _http: Http;
let sanitizer: DomSanitizer;
let campaignService: CampaignService;
describe('Campaign Component', ()=>{
    let campaignComponent: CampaignComponent;
    beforeEach(async(() => {
        campaignComponent = new CampaignComponent(dataService, sanitizer, campaignService);
    }))

it('Should have a Contact Array', () =>{
    expect(Array.isArray(campaignComponent.campaignContacts)).toBe(true);
});

it('Should be able to swtich the shown contacts', ()=>{
    // let comp = new CampaignComponent();
    // let contact1 = comp.currentContact;
    // let contact2 = comp.switchContact('forward');
    // expect(contact1).not.toEqual(contact2);
});

//   it('Should be able to post notes', ()=>{
//     let comp = new CampaignComponent();
//     const noteBefore = 'ok this is epic';
//     const note = comp.postNote('ok this is epic \n', 'i added this');
//     expect(noteBefore).not.toEqual(note);
//   });

  it('Should be able to render a campaign name', ()=>{});

});
