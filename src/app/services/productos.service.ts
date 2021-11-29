import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  Url = "http://localhost:3000/api/"
  constructor(
    private http: HttpClient
  ) { }

  getProductos() : Observable <any>{
    return this.http.get(this.Url+'productos')
  }
}
