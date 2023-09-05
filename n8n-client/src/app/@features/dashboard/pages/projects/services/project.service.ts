import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';

const API_URL = environment.server.outerShellServer;

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {}

  getProjects(uid: string) {
    return this.httpClient.get<any>(`${API_URL}project/all?uid=${uid}`).pipe(
      map((res: any) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }

        return res.data;
      })
    );
  }

  createProject(project: Project) {
    return this.httpClient.post<any>(`${API_URL}project`, project).pipe(
      map((res: any) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }

        return res.data;
      })
    );
  }

  getProject(id: string) {
    return this.httpClient.get<any>(`${API_URL}project?id=${id}`).pipe(
      map((res: any) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }

        return res.data;
      })
    );
  }

  updateProject(id: string, project: Project) {
    return this.httpClient.put<any>(`${API_URL}project?id=${id}`, project).pipe(
      map((res: any) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }

        return res.data;
      })
    );
  }

  deleteProject(id: string) {
    return this.httpClient.delete<any>(`${API_URL}project?id=${id}`).pipe(
      map((res: any) => {
        if (res.error !== null) {
          throw new Error(res.error);
        }

        return res.data;
      })
    );
  }
}
