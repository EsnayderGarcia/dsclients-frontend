import { Client } from './../interfaces/client.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Page } from '../interfaces/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string = 'http://dsclients-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  readAll(page: number): Observable<Page> {
    const url = `${this.baseUrl}/clients?page=${page}&size=5`; 
    return this.http.get<Page>(url);
  }

  create(client: Client): Observable<Client> {
    const url = `${this.baseUrl}/clients`;
    return this.http.post<Client>(url, client);
  }

}
