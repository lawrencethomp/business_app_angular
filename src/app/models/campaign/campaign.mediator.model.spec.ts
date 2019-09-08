
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CampaignMediator} from './campaign.mediator.model';
import {contact1, contact2, contact3, contact4, contact5} from '../contact/contact.seed';

describe('Testing the Campaign Mediator', () => {
    let campaignMediatorModel: CampaignMediator;
    beforeEach(async(() => {
        campaignMediatorModel = new CampaignMediator([contact1, contact2, contact3, contact4, contact5]);
    }))


    it('Should have a String of IDs', () => {
        expect(typeof campaignMediatorModel.contactIDArray[0]).toBe('string');
    });

    it('Should be able to move from contact to contact forward through pagination', () => {
        expect(campaignMediatorModel.currentContact).toBe(contact1);
        campaignMediatorModel.changeContact('forward');
        expect(campaignMediatorModel.currentContact).toBe(contact2);
    });

    it('Should not go past the current position when at the end of the Contact List', () => {
        const endPosition = campaignMediatorModel.contactArray.length - 1;
        campaignMediatorModel.contactPosition = endPosition;
        expect(campaignMediatorModel.contactPosition).toBe(5);
        campaignMediatorModel.changeContact('forward');
        expect(campaignMediatorModel.contactPosition).toBe(5);
    });

    it('Should not go past the current position when at the beginning of the Contact List', () => {
        
        campaignMediatorModel.contactPosition = 1;
        expect(campaignMediatorModel.contactPosition).toBe(1);
        campaignMediatorModel.changeContact('backward');
        expect(campaignMediatorModel.contactPosition).toBe(1);
    });

    it('Should be able to move from contact to contact backward through pagination', () => {
        expect(campaignMediatorModel.currentContact).toBe(contact1);
        campaignMediatorModel.changeContact('forward');
        campaignMediatorModel.changeContact('backward');
        expect(campaignMediatorModel.currentContact).toBe(contact1);
    });

    it('Should take in the contacts from the Campaign', () => {
        expect(campaignMediatorModel.contactArray[0].constructor.name).toBe('Contact');
        expect(Array.isArray(campaignMediatorModel.contactArray)).toBe(true);
    });
    it('Should be able to receive a graph array', () => {
        expect(Array.isArray(campaignMediatorModel.contactIDArray)).toBe(true);
    });
});
