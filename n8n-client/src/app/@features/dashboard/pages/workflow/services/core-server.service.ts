import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';

const { n8n } = environment;

@Injectable({
  providedIn: 'root'
})
export class CoreServerService {
  nodeTypes: any;

  constructor(private httpClient: HttpClient) { }

  getWorkflows(): Observable<any> {
    return this.httpClient.get(`${n8n.apiServer}workflows?limit=100`);
  }

  getWorkflow(id: string): Observable<any> {
    return this.httpClient.get(`${n8n.apiServer}workflows/${id}`);
  }

}
