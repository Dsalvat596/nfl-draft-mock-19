import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Prospect } from '../models/prospect';

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {
  uri = 'http://localhost:4000/prospects';
  availableProspects: Prospect[];
  draftedProspects: Prospect[];
  public availableProspectsUpdated: Observable<Prospect[]>;
  private availableProspectsSubject: Subject<Prospect[]>;
  public draftedProspectsUpdated: Observable<Prospect[]>;
  private draftedProspectsSubject: Subject<Prospect[]>;
  constructor(private http: HttpClient) { 
    this.availableProspectsSubject = new Subject<Prospect[]>();
    this.availableProspectsUpdated = this.availableProspectsSubject.asObservable();
    this.draftedProspectsSubject = new Subject<Prospect[]>();
    this.draftedProspectsUpdated = this.draftedProspectsSubject.asObservable();
  }

  getProspects(){
     this.http.get<Prospect[]>(`${this.uri}`).subscribe((res:Prospect[])=>{
      this.availableProspects = res;
      this.availableProspectsSubject.next(this.availableProspects);
    })
  }
}
