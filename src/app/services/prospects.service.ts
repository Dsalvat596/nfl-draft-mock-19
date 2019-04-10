import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {
  uri = 'http://localhost:4000/prospects';
  prospects = [];

  constructor(private http: HttpClient) { }

  getProspects(){
    console.log('getting');
    return this.http.get(`${this.uri}`);
  }
}
