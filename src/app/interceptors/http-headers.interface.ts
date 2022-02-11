import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, retry } from "rxjs";

@Injectable()
export class HttpHeadersInterceptors implements  HttpInterceptor{


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
                'x-rapidapi-key': '59e3009838msh33de757bfd48e42p112ea1jsnfa1785a483ab'
              },
              setParams: {
                key: 'd216f9cdc9e44ddbb0220101a9f6e6e5',
              }
        });

        return next.handle(req);    
    }
}