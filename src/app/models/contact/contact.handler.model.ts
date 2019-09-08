import { ContactGraph } from '../graph/contact.graph.model';
import { Contact } from './contact.model';
import { Node } from '../graph/node.model';

import GraphVertex from '../graph/contact.graph.vertext.model';
import GraphEdge from '../graph/contact.graph.edge.model';
import Graph from '../graph/imp.graph.model';
import bfTravellingSalesman from '../graph/travelingsalesman.model';
import * as geolocation from 'geolocation';

export class ContactHandler {

  contactGraph = new ContactGraph();
  inputContacts: Array<Contact>;
  shortestPath: Array<String>;
  graph = new Graph();
  vertexes: Array<GraphVertex> = [];

  hannaford = new Contact('Hannaford', 
    'Store', '140 Bicentennial Dr', 'email', 'start', 
    'store', ' ', '43.020470', '-71.448340', 'Manchester', 'NH', 'now', '03104', 'LT', 'now', 'store', 'id55483neverstop');

  constructor(inputContacts: Array<Contact>) {
    this.inputContacts = inputContacts;
    this.inputContacts.unshift(this.hannaford);
    this.init();

  }

  // lat 43.020470

  // lng -71.448340

  getLocation(){
  geolocation.getCurrentPosition(function (err, position) {
    console.log('here');
    if (err) {throw err}
    console.log(position)
    })
  }

  createGraphVertex(id) {
    return new GraphVertex(id)
  }

  processContactsToGraph() {
    this.vertexes = this.inputContacts.map(
      (contact) => { return this.createGraphVertex(contact._id)
    });
  }

  getNodeValue = (id: String) => {
    const contact = this.inputContacts.find(
      (contact) => contact._id === id
    );
    return contact;
  }

  processEdgesToGraph() {
    const pairedNodes = this.pairs(this.vertexes);

    pairedNodes.forEach(pair => {
      this.graph.addEdge(
        new GraphEdge(pair[0], pair[1],
          this.calculateDistance(
            this.getNodeValue(pair[0].getKey()),
            this.getNodeValue(pair[1].getKey())
        )
        ))
    });
  }

  calculateDistance(contact1, contact2): Number {
    const radLat1 = Math.PI * Number(contact1.geoLocation_lat) / 180;
    const radLat2 = Math.PI * Number(contact2.geoLocation_lat) / 180;
    const radLon1 = Math.PI * Number(contact1.geoLocation_lng) / 180;
    const radLon2 = Math.PI * Number(contact2.geoLocation_lng) / 180;
    const theta = Number(contact1.geoLocation_lng) - Number(contact2.geoLocation_lng);
    const radTheta = Math.PI * theta / 180;

    let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;

    return dist;
}



  async getTravelingSalesmanArray() {
    let travelingSalesmanPath;
    travelingSalesmanPath = bfTravellingSalesman(this.graph);
    const travelingSalemanArray = travelingSalesmanPath.map(
      (node) => { return node.getKey();
    });
    return travelingSalemanArray;
  }

  pairs(array) {
    const res = [],
      l = array.length;
    for (var i = 0; i < l; ++i) {
      for (var j = i + 1; j < l; ++j) {
        res.push([array[i], array[j]]);
      }
    }
    return res;
  }

  createInitialLocation() {
    // pass in initial location to the map https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
  }

  init() {
    this.processContactsToGraph();
    this.processEdgesToGraph();
  }
}
