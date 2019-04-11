import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Prospect } from '../models/prospect';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {
  uri = 'http://localhost:4000/prospects';
  allProspects: Prospect[];

  constructor(private http: HttpClient) { }

  getProspects(){
    console.log('getting');
    return this.http.get<Prospect[]>(`${this.uri}`).subscribe((res:Prospect[])=>{
      this.allProspects = res;
      console.log(this.allProspects);
    })
  }
}
