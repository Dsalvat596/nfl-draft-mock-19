import { Component, OnInit } from '@angular/core';
import { ProspectsService } from 'src/app/services/prospects.service';
import { Prospect } from 'src/app/models/prospect';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';

@Component({
  selector: 'app-prospect-area',
  templateUrl: './prospect-area.component.html',
  styleUrls: ['./prospect-area.component.css']
})
export class ProspectAreaComponent implements OnInit {
  currentTeam: Team;
  displayedColumns: string[] = ['ovr_rank', 'last_name', 'first_name', 'position', 'pos_rank', 'school', 'year', 'height', 'weight'];
  dataSource: Prospect[];

  constructor(private ps: ProspectsService, private ts: TeamsService) { }

  ngOnInit() {
    this.ps.getProspects();
    this.ps.availableProspectsUpdated.subscribe((res)=>{
      this.dataSource = res.sort(function(a,b){
        if(a.ovr_rank < b.ovr_rank){return -1}
        if(a.ovr_rank > b.ovr_rank){return 1}
        return 0;
      })
      console.log(this.dataSource[3]);
    })
    this.ts.currentTeamUpdated.subscribe((team:Team)=>{
      this.currentTeam = team;
      console.log(this.currentTeam.name);
    })
  }

}
