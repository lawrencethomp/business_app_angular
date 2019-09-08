/**
 *
 *  @file The Node Object that the Contact Goes into.
 *  @author Lawrence Thompson
 *
*/

import { Edge } from './edge.model';
import { Contact } from '../contact/contact.model';

/**
 *
 *  @class Node
 *  @classdesc The Node class instance which contains the contact.
 *
*/
export class Node {
    contact: Contact;
    edgeArray: Array<Edge>;
    visited: boolean;
    constructor(contact: Contact) {
        this.contact = contact;
        this.visited = false;
    }
    /**
     *
     *  @function markVisited - mark the node as visited, which will give a visual feedback.
     *  @returns this.visited to true.
    */
    markVisited() {
        return this.visited = true;
    }

    /**
     * @function addEdge
     * @returns void
     */
    addEdge(edge: Edge) {
        this.edgeArray.push(edge);
    }

    markUnVisited() {
        return this.visited = false;
    }

}
