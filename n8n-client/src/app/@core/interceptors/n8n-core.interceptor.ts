import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class N8nCoreInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("N8nCoreInterceptor");

    const clonedRequest = request.clone({
      headers: request.headers.set('X-N8N-API-KEY', environment.n8n.apiKey)
    });

    return next.handle(clonedRequest);
  }
}
