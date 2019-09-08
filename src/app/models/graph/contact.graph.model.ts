import {Contact} from '../contact/contact.model';
import {Node} from './node.model';
import {Edge} from './edge.model';
import {CampaignService} from '../../services/campaign.service';
import * as Graph from 'graph-data-structure';
import * as _ from 'lodash';
/*
    The Contact Graph DataType.
*/

// TODO: Change contact to ContactNode
export class ContactGraph {
    vertices: Array<Node> = [ ];
    baseGraph = new Graph();
    constructor() {

    }

    calculateDistance(node1, node2): Number {
        const radLat1 = Math.PI * Number(node1.contact.geoLocation_lat) / 180;
        const radLat2 = Math.PI * Number(node2.contact.geoLocation_lat) / 180;
        const radLon1 = Math.PI * Number(node1.contact.geoLocation_lng) / 180;
        const radLon2 = Math.PI * Number(node2.contact.geoLocation_lng) / 180;
        const theta = Number(node1.contact.geoLocation_lng) - Number(node2.contact.geoLocation_lng);
        const radTheta = Math.PI * theta / 180;
        let dist = Math.sin(radLat1) * Math.sin(radLat2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.cos(radTheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        return dist;
    }





    contains(nodeId: String) {
        const array = this.baseGraph.topologicalSort();

        for (var i = 0; i < array.length; i++) {
            if ( array[i]  === nodeId ) {
                return true;
            }
        }
        return false;
    }

    addNode(node: Node) {
        this.vertices.push(node);
        this.baseGraph.addNode(node.contact._id);
    }

    removeNode(id: String) {
        this.baseGraph.removeNode(id);
        // logic here to take out of the vertices.
    }

    getNodeValue = (id: String) => {
        for (var i = 0; i < this.vertices.length; i++) {
            if ( this.vertices[i].contact._id === id) {
                return this.vertices[i].contact;
            }
        }
    }


    // getNodeValue (id: String) {
    //     console.log(id);
    //     this.vertices.find(node => node.contact._id === id);
    // }

    /**
     *  @function addEdge - Adds an edge into a node.
     *      @param {ContactNode} startNode the first node to be connected.
     *      @param {ContactNode} endNode the second node to be connected.
     *      @returns {Edge} Edge the Edge between a and b.
    */

    addEdge(node1: Node, node2: Node, weight: Number) {

        this.baseGraph.addEdge(node1.contact._id, node2.contact._id, weight);

    }
    /**
     *  @function contains - checks if a node is currently in the graph.
     *      @param {ContactNode} checkNode
     *      @returns {boolean} whether or not there was a node.
     *
    */

    /**
     *  @function hasEdge - looks for a connection between two nodes in a graph.
     *      @param {ContactNode} beginningContact The Contact to start with.
     *      @param {ContactNode} endingContact The Contact to end with.
     *      @returns {boolean} Whether or not there was an edge.
    */

    hasEdge(edge: Edge) {}

}
