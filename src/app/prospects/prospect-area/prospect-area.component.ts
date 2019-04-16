import { Component, OnInit, ViewChild } from '@angular/core';
import { ProspectsService } from 'src/app/services/prospects.service';
import { Prospect } from 'src/app/models/prospect';
import { Team } from 'src/app/models/team';
import { TeamsService } from 'src/app/services/teams.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-prospect-area',
  templateUrl: './prospect-area.component.html',
  styleUrls: ['./prospect-area.component.css']
})
export class ProspectAreaComponent implements OnInit {
  currentTeam: Team;
  displayedColumns: string[] = ['ovr_rank', 'last_name', 'first_name', 'position', 'pos_rank', 'school', 'year', 'height', 'weight'];
  dataSource: MatTableDataSource<Prospect>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ps: ProspectsService, private ts: TeamsService) { }

  ngOnInit() {
    this.ps.getProspects();
    this.ps.availableProspectsUpdated.subscribe((res)=>{
      let datatemp = res.sort(function(a,b){
        if(a.ovr_rank < b.ovr_rank){return -1}
        if(a.ovr_rank > b.ovr_rank){return 1}
        return 0;
      })
      this.dataSource = new MatTableDataSource(datatemp); 
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource);
    })
    this.ts.currentTeamUpdated.subscribe((team:Team)=>{
      this.currentTeam = team;
      // console.log(this.currentTeam);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getProspect(prospect: Prospect){
    console.log(prospect);
  }

}
