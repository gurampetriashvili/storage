import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  myUrl = 'http://localhost:3000/';



  myMenus(): Observable<any[]>  {
    return this.http.get<any[]>(this.myUrl + 'menus');
  }

  constructor(private http: HttpClient) { }
}
