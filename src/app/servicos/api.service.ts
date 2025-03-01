import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://swapi.dev/api'

  constructor(private http: HttpClient) {

  }

  getPessoa(): Observable<any> {
    return this.http.get(`${this.apiUrl}/people`)
  }

  getPersonagens(): Observable<any> {
    return this.http.get(`${this.apiUrl}/people`);
  }

  getPlanetas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/planets`);
  }

  getFilmes(): Observable<any> {
    return this.http.get(`${this.apiUrl}/films`);
  }

  getFilmePorUrl(url: string): Observable<any> {
    return this.http.get(url);
  }



}