import { Injectable } from '@nestjs/common';

import { IWorkflowCoreRepository } from './model/workflow.model';
import { HttpService } from '@nestjs/axios';
import { DEFAULT_SETTINGS, WorkflowCoreDTO } from './model/workflow.dto';
import { Observable } from 'rxjs';

import * as dotenv from 'dotenv';
dotenv.config();

const N8N_CORE_API = 'https://core.n9n.codes/api/v1';
const N8N_CORE_API_KEY = process.env.N8N_API_KEY;

@Injectable()
export class WorkflowCoreRepository implements IWorkflowCoreRepository {
  constructor(private readonly httpService: HttpService) { }

  createWorkflow(name: string, tags?: Array<string>): Observable<any> {
    const newWorkflow: WorkflowCoreDTO = {
      name: name,
      nodes: [],
      connections: {},
      settings: DEFAULT_SETTINGS,
    };

    const result = this.httpService.post<any>(`${N8N_CORE_API}/workflows`, newWorkflow,
      {
        headers: {
          'Accept': 'application/json',
          'X-N8N-API-KEY': N8N_CORE_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );

    return result
  }
}
