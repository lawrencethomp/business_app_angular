/**
 *  @file edge.model.ts - The file for the Edge Model
 *  @author Lawrence Thompson
 *
 */

/**
 *
 * @class Edge
 * @classdesc The Edge class, which is an object used to express relations. Kept in the Node Obj.
 *
 */
// TODO: Find a way to calculate the distance.
export class Edge {
    connectedNodeName1: string;
    connectedNodeName2: string;
    NodeLat1: number;
    NodeLng1: number;
    NodeLat2: number;
    NodeLng2: number;
    distance: number;
    constructor(
            connectedNodeName1: string, connectedNodeName2: string,
            NodeLat1: number, NodeLng1: number, NodeLat2: number, NodeLng2: number ) {
        this.connectedNodeName1 = connectedNodeName1;
        this.connectedNodeName2 = connectedNodeName2;
        this.NodeLat1 = NodeLat1;
        this.NodeLng1 = NodeLng1;
        this.NodeLat2 = NodeLat2;
        this.NodeLng2 = NodeLng2;
        this.distance = this.getDistance(this.NodeLat1, this.NodeLng1, this.NodeLat2, this.NodeLng2);
    }
    /**
     * @function getDistance - Determines the distance between two sets of Latitude and Longitudinal points.
     * @param lat1 - The Latitude of point 1
     * @param lon1 - The Longitude of point 1
     * @param lat2 - The Latitude of point 2
     * @param lon2 - The Longitude of point 2
     * @returns dist - The distance between the points in miles.
     */
    getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
        const radlat1 = Math.PI * lat1 / 180;
        const radlat2 = Math.PI * lat2 / 180;
        const radlon1 = Math.PI * lon1 / 180;
        const radlon2 = Math.PI * lon2 / 180;
        const theta = lon1 - lon2;
        const radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        return dist;
    }

}
