import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  uri = 'http://localhost:4000/teams';
  allTeams: Team[];
  currentPick: number;
  currentTeam: Team;
  public currentTeamUpdated: Observable<Team>;
  private currentTeamSubject: Subject<Team>;
  public currentPickUpdated: Observable<number>;
  private currentPickSubject: Subject<number>;
  nextTeam: Team;

  constructor(private http: HttpClient) { 
    this.currentTeamSubject = new Subject<Team>();
    this.currentTeamUpdated = this.currentTeamSubject.asObservable();
    this.currentPickSubject = new Subject<number>();
    this.currentPickUpdated = this.currentPickSubject.asObservable();
  }

  getTeams(){
     this.http.get(`${this.uri}`).subscribe((teams: Team[]) => {
      this.allTeams = teams.map(function(obj) {
        obj.draft_picks = obj.draft_picks.split(",");
        return obj;
      });
      console.log(this.allTeams);
      this.currentPick = 1;
      this.currentTeam = this._findNextTeam(this.currentPick);
      console.log(this.currentTeam);
      this.currentTeamSubject.next(this.currentTeam);
      this.currentPickSubject.next(this.currentPick);
    });
  }

  _findNextTeam(pick: number){
    for (let i = 0; i < this.allTeams.length; i++) {
      if (
        this.allTeams[i].draft_picks.includes(pick.toString())
      ) {
        this.currentTeam = this.allTeams[i];
        return this.currentTeam;
       
      };
    };
  };

  pickMade(){
    this.currentPick++
    this.currentTeam = this._findNextTeam(this.currentPick)
    this.currentPickSubject.next(this.currentPick);
    this.currentTeamSubject.next(this.currentTeam);
  }
}
