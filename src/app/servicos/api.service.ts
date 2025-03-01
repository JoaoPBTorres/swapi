import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    private apiurl = 'https://swapi.dev/api'

  constructor(private http:HttpClient) {

   }

   getPessoa():Observable<any>{
    return this.http.get(`${this.apiurl}/people`)
   }

}