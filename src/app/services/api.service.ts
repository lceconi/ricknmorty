import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private HOST: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient,) { }

  public getDados(slug: string, id: string = '') {
    let url = this.HOST + slug + '/';
    if (id) url = url + id;
    return this.http.get(url);
  }

  public getDadosArray(slug: string, ids: any) {
    let url = this.HOST + slug + '/' + ids.join();
    return this.http.get(url);
  }

}
