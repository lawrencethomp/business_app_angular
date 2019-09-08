import GraphVertex from './contact.graph.vertext.model';
import GraphEdge from './contact.graph.edge.model';
import Graph from './imp.graph.model';
import bfTravellingSalesman from './travelingsalesman.model';
import { ContactHandler } from '../contact/contact.handler.model';
import {contact1, contact2, contact3, contact4, contact5} from '../contact/contact.seed';
describe('bfTravellingSalesman', () => {
  it('should solve problem for simple graph', () => {
    const graphRes = new ContactHandler([contact1, contact2, contact3, contact4, contact5]);
    const salesmanPath2 = bfTravellingSalesman(graphRes.graph);
    
    const array = graphRes.getTravelingSalesmanArray();
    console.log(array);
    expect(salesmanPath2[0].getKey()).toEqual('id55483neverstop');
    expect(salesmanPath2[1].getKey()).toEqual('5be11fbbbf113737c430a6a3');
    expect(salesmanPath2[2].getKey()).toEqual('5be11dddf113737c430a6a3');
    expect(salesmanPath2[3].getKey()).toEqual('5be11fcccf113737c430a6a3');
    expect(salesmanPath2[4].getKey()).toEqual('5be11eeef113737c430a6a3');
    graphRes.getLocation();
  });
});