import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class N8nCoreInterceptor implements HttpInterceptor {
  constructor(private cookieService: CookieService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const cookie = this.cookieService.get('token');

    const clonedRequest = request.clone({
      headers: request.headers
        .set('X-N8N-API-KEY', environment.n8n.apiKey)
        .set('Authorization', `Bearer ${cookie}`)
    });

    return next.handle(clonedRequest);
  }
}
