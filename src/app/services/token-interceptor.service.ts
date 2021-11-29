import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{
  
  constructor(
    private authService: AuthService
  ) { }
  intercept(req:any,next:any){
      const token = req.clone({
        setHeaders:{
          authorization: 'Bearer '+ this.authService.getToken()
        }
      })
      return next.handle(token)
    }
}
