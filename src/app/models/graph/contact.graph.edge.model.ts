import GraphVertex from "./contact.graph.vertext.model";

export default class GraphEdge {
    /**
     * @param {GraphVertex} startVertex
     * @param {GraphVertex} endVertex
     * @param {Number} [weight=1]
     */
    startVertex: GraphVertex;
    endVertex: GraphVertex;
    weight: Number;
    constructor(startVertex, endVertex, weight: Number = 0) {
      this.startVertex = startVertex;
      this.endVertex = endVertex;
      this.weight = weight;
    }
  
    /**
     * @return {string}
     */
    getKey() {
      const startVertexKey = this.startVertex.getKey();
      const endVertexKey = this.endVertex.getKey();
  
      return `${startVertexKey}_${endVertexKey}`;
    }
  
    /**
     * @return {GraphEdge}
     */
    reverse() {
      const tmp = this.startVertex;
      this.startVertex = this.endVertex;
      this.endVertex = tmp;
  
      return this;
    }
  
    /**
     * @return {string}
     */
    toString() {
      return this.getKey();
    }
  }