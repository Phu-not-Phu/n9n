import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { NodeSocketsType } from '../models/node.model';


const { n8n, server } = environment;

@Injectable({
  providedIn: 'root'
})
export class CoreServerService {
  nodeTypes: any;

  constructor(private httpClient: HttpClient) { }

  getWorkflows(): Observable<any> {
    return this.httpClient.get(`${n8n.server + n8n.apiVersion}workflows?limit=100`);
  }

  getWorkflow(id: string): Observable<any> {
    return this.httpClient.get(`${n8n.server + n8n.apiVersion}workflows/${id}`);
  }

  getNodeTypes(type: string): Observable<NodeSocketsType> {
    return this.httpClient.get(`${server.outerShellServer}nodes/sockets?q=${type}`);
  }

}
