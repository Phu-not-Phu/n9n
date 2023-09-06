import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateWorkflow, UpdateWorkflow } from '../models/workflow.model';

import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

const { backend } = environment;

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {
  constructor(private httpClient: HttpClient) { }

  getWorkflows(projectID: string) {
    return this.httpClient.get<any>(`${backend.apiServer}workflow/all?pid=${projectID}`).pipe(
      map((res) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }
        return res.data;
      })
    );
  }

  createWorkflow(workflow: CreateWorkflow) {
    return this.httpClient.post<any>(`${backend.apiServer}workflow`, workflow).pipe(
      map((res) => {
        console.log(res);

        if (res.error !== null) {
          throw new Error(res.error);
        }
        return res.data;
      })
    );
  }

  updateWorkflow(id: string, workflow: UpdateWorkflow) {
    return this.httpClient.put<any>(`${backend.apiServer}workflow?id=${id}`, workflow).pipe(
      map((res) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }
        return res.data;
      })
    );
  }

  deleteWorkflow(id: string) {
    return this.httpClient.delete<any>(`${backend.apiServer}workflow?id=${id}`).pipe(
      map((res) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }
        return res.data;
      })
    );
  }
}
