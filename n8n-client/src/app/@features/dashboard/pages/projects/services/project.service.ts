import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.server.outerShellServer;

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  createProject(project: Project) {
    return this.httpClient.post(`${API_URL}project`, project);
  }
}
