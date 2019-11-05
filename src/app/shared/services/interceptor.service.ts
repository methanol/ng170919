import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BASE_URL_TOKEN } from '../../config';
import { filter, map } from 'rxjs/operators';

export class InterceptorService implements HttpInterceptor {

  public constructor(
    @Inject(BASE_URL_TOKEN) private baseUrl: string
  ) {
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headers: HttpHeaders = req.headers
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlnb3IiLCJpYXQiOjE1NjQxMzY0Nzd9.bgLlbxJjFs7OKLLu3FhboCqKXDDT4VZiCZNofjvWw68');
    const jsonReq: HttpRequest<any> = req.clone({
      headers,
      url: `${this.baseUrl}${req.url}`
    });
    return next.handle(jsonReq)
      .pipe(
        filter(this._isHttpResponse),
        map((res: HttpResponse<any>) => {
          return res.clone({body: res.body && res.body.data});
        })
      );

  }

  private _isHttpResponse(event: HttpEvent<any>): event is HttpResponse<any> {
    if (event instanceof HttpResponse) {
      return true;
    }
    return false;
  }
}
