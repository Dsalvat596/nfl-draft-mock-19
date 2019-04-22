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
  draftedProspects: Prospect[] = [];
  public availableProspectsUpdated: Observable<Prospect[]>;
  private availableProspectsSubject: Subject<Prospect[]>;
  public draftedProspectsUpdated: Observable<Prospect[]>;
  private draftedProspectsSubject: Subject<Prospect[]>;
  constructor(private http: HttpClient) { 
    this.availableProspectsSubject = new Subject<Prospect[]>();
    this.availableProspectsUpdated = this.availableProspectsSubject.asObservable();
    this.draftedProspectsSubject = new Subject<Prospect[]>();
    this.draftedProspectsUpdated = this.draftedProspectsSubject.asObservable();
    this.getProspects();
  }

  getProspects(){
     this.http.get<Prospect[]>(`${this.uri}`).subscribe((res:Prospect[])=>{
      this.availableProspects = res;
      this.availableProspectsSubject.next(this.availableProspects);
    })
  }

  draftProspect(prospectId, pick){
    let index = this._findProspectIndexById(prospectId);
    let drafted = this.availableProspects[index];
    drafted.drafted = pick;
    this.availableProspects.splice(index, 1);
    this.draftedProspects.push(drafted);
    this.availableProspectsSubject.next(this.availableProspects);
    // this.draftedProspectsSubject.next(this.draftedProspects);
  }

  _findProspectIndexById(id){
    for(let i=0; i<this.availableProspects.length; i++){
      if (this.availableProspects[i]._id === id){
        return i;
      }
    }
  }
}
