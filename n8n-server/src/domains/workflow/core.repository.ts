import { Injectable } from '@nestjs/common';

import { IWorkflowCoreRepository } from './model/workflow.model';
import { HttpService } from '@nestjs/axios';
import { DEFAULT_SETTINGS, WorkflowCoreDTO } from './model/workflow.dto';
import { Observable } from 'rxjs';

const N8N_CORE_API = 'https://core.n9n.codes/api/v1';
const N8N_CORE_API_KEY = process.env.N8N_API_KEY;

@Injectable()
export class WorkflowCoreRepository implements IWorkflowCoreRepository {
  constructor(private readonly httpService: HttpService) {}

  createWorkflow(name: string, tags?: Array<string>): Observable<any> {
    const newWorkflow: WorkflowCoreDTO = {
      name: name,
      nodes: [],
      connections: [],
      active: false,
      settings: DEFAULT_SETTINGS,
    };

    return this.httpService.post(`${N8N_CORE_API}/workflows`, newWorkflow, {
      headers: {
        'X-N8N-API-KEY': N8N_CORE_API_KEY,
      },
    });
  }
}
