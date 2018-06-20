import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  myUrl = 'http://localhost:3000/';

  myMenus(): Observable<any[]>  {
    return this.http.get<any[]>(this.myUrl + 'products');
  }


  constructor(private http: HttpClient) { }
}
