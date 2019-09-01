import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private HOST: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient,) { }

  public getLocais() {
    let url = this.HOST + 'location/';
    return this.http.get(url);
  }
}
