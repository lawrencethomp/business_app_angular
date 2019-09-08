import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactGraph } from './contact.graph.model';
import {Contact} from '../contact/contact.model';
import {Node} from './node.model';
import {contact1, contact2, contact3, contact4, contact5} from '../contact/contact.seed';
import * as Graph from 'graph-data-structure';

describe('Testing the Graph Model', () => {
  let model: ContactGraph;
  let node1: Node;
  let node2: Node;
  let distance: Number;
  beforeEach(async(() => {
    model = new ContactGraph();
  }));

  it('Should have individual accessible nodes', function() {
     expect(model.vertices instanceof Array).toBe(true);
  });

  it('Should be able to access an individual node from id', function() {
    node1 = new Node(contact1);
    model.addNode(node1);
    const contactCheck = model.getNodeValue(node1.contact._id);
    expect(contactCheck._id).toBe(node1.contact._id);
  });


  it('Can add a Node', function() {
    node1 = new Node(contact1);
    node2 = new Node(contact2);
    model.addNode(node1);
    model.addNode(node2);
    expect(model.contains(node1.contact._id)).toBe(true);
  });

  it('Should be a ContactGraph datatype', function() {
    expect(model instanceof ContactGraph).toBe(true);
  });

  it('Can Remove a Node from search', function() {
    model.addNode(node2);
    model.contains(node2.contact._id);
    model.removeNode(node2.contact._id);
    expect(model.contains(node2.contact._id)).toBe(false);
  });

  it('Can calculate distances between two Nodes', function() {
    distance = model.calculateDistance(node1, node2);
    expect(distance).toBe(560.1831701447617);
  });

  it('Can add an edge', function() {
    model.addNode(node1);
    model.addNode(node2);
    model.addEdge(node1, node2, model.calculateDistance(node1, node2));
    const adjacentNode = model.baseGraph.adjacent(node1.contact._id);
    expect(adjacentNode[0]).not.toBe(node1.contact._id);
  });

  it('Can add distance as a weight between edges', function() {
    model.addNode(node1);
    model.addNode(node2);
    model.addEdge(node1, node2, model.calculateDistance(node1, node2));
    expect(model.baseGraph.getEdgeWeight(node1.contact._id, node2.contact._id)).toBe(560.1831701447617);

  });

});
