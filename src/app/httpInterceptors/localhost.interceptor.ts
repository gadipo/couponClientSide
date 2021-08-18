import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LocalhostInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(request.url);
    // const oldUrl = request.url;
    // var urlArr = oldUrl.split("8080");
    // urlArr[0] = "https://my-coupon-website.herokuapp.com";
    // const newHostUrl = urlArr.join('');
    // console.log(newHostUrl);
    // const newUrl = {url:newHostUrl};
    // const newUrlWithParams = {urlWithParams:newHostUrl};
    // request = Object.assign(request,newUrl);
    // request = Object.assign(request,newUrlWithParams);
    // console.log(request.url);
    
    return next.handle(request);
  }
}
