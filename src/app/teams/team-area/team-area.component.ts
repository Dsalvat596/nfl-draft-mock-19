import { Component, OnInit } from "@angular/core";
import { TeamsService } from "src/app/services/teams.service";
import { Team } from "src/app/models/team";

@Component({
  selector: "app-team-area",
  templateUrl: "./team-area.component.html",
  styleUrls: ["./team-area.component.css"]
})
export class TeamAreaComponent implements OnInit {
  allTeams: Team[];
  currentPick: number;
  currentTeam: Team;
  nextTeam: Team;

  constructor(private ts: TeamsService) {}

  ngOnInit() {
    this.ts.getTeams()
    this.ts.currentTeamUpdated.subscribe((data)=>{
      this.currentTeam = data;
    });
    this.ts.currentPickUpdated.subscribe((data)=>{
      this.currentPick = data;
    })
  }

  pickMade(){
    this.ts.pickMade();
  }
};
