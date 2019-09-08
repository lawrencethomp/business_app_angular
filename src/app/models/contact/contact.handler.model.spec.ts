import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ContactHandler} from './contact.handler.model';
import {contact1, contact2, contact3, contact4, contact5} from './contact.seed';

describe('Testing the Contact Handler Model', () => {
    let contactHandlerModel: ContactHandler;
    beforeEach(async(() => {
        contactHandlerModel = new ContactHandler([contact1, contact2, contact3, contact4, contact5]);
    }))
    it('should have contacts available by default', function() {
        expect(contactHandlerModel.inputContacts.length > 0).toBe(true);
    });
    it('Should be able to process contacts after being added', function() {
        contactHandlerModel.processContactsToGraph();
        const contactArray = contactHandlerModel.contactGraph.baseGraph.topologicalSort();
        expect(contactArray.length).toBe(5);
    });
    it('Should be able to add edges ', function() {
        const nodes = contactHandlerModel.processContactsToGraph();
        const nodePairs = contactHandlerModel.pairs(contactHandlerModel.contactGraph.baseGraph.topologicalSort());
        contactHandlerModel.processEdgesToGraph();
    });

    it('Should be able to get an initial location', function() {

    });

    it('Should be able to get the shortest path', function() {

    });


});
