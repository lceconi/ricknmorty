import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private HOST: string = 'https://rickandmortyapi.com/api/';

  constructor(private http: HttpClient,) { }

  public getDados(slug: string, id: string = ''): Observable <any> {
    let url = this.HOST + slug;
    if (id) url = url + '/' + id;
    return this.http.get(url);
  }

  public getDadosArray(slug: string, ids: any): Observable <any> {
    let url = this.HOST + slug + '/' + ids.join();
    return this.http.get(url);
  }

}
