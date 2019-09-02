import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private HOST: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient,) { }

  public getLocais(id: string = '') {
    let url = this.HOST + 'location/';
    if (id) url = url + id + '/';
    return this.http.get(url);
  }

  public getPersonagem(url) {
    return this.http.get(url);
  }

}
