import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Node } from './node.model';
import { Edge } from './edge.model';
import { Contact } from '../contact/contact.model';
import {contact1, contact2, contact3, contact4, contact5} from '../contact/contact.seed';

describe('Testing the Node Model', () => {
    let model: Node;
    beforeEach(async(() => {
        model = new Node(contact1);
    }));

    it('Should have an available contact', function() {
        expect(model.contact instanceof Contact).toBe(true);
    });
    it('should have an array of edges', function() {
        // expect(model.edgeArray instanceof Array).toBe(true);
    });
    it('Should have an unvisited contact by default', function() {
        expect(model.visited).toBe(false);
    });
    it('Should be able to have an unvisited contact be marked as visited', function() {
       model.markVisited();
       expect(model.visited).toBe(true);
    });
    it('Should be able to change a visited contact to unvisited', function() {
        model.markVisited();
        model.markUnVisited();
        expect(model.visited).toBe(false);
    });
    it('Should be able to not change state if mark visited is called for true', function() {
        model.markVisited();
        model.markVisited();
        expect(model.visited).toBe(true);
    });
    it('Should not change state if mark unvisited is called while false', function () {
        model.markUnVisited();
        expect(model.visited).toBe(false);
    });
});
