import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Prospect } from 'src/app/models/prospect';
import { ProspectAreaComponent } from '../prospect-area/prospect-area.component';
import { TeamsService } from 'src/app/services/teams.service';
import { Team } from 'src/app/models/team';

@Component({
  selector: 'app-prospect-draft-confirm',
  templateUrl: './prospect-draft-confirm.component.html',
  styleUrls: ['./prospect-draft-confirm.component.css']
})
export class ProspectDraftConfirmComponent implements OnInit {
  public thisProspect: Prospect;
  public currentTeam: Team;
  constructor(public dialogRef: MatDialogRef<ProspectAreaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Prospect, private ts: TeamsService) { }

  ngOnInit() {
    this.thisProspect = this.data
    this.currentTeam = this.ts.currentTeam
  }

  draftPlayer(){
    this.ts.draftPlayerToTeam(this.thisProspect, this.currentTeam);
    this.dialogRef.close();
  }

  cancel(){
    this.dialogRef.close();
  }

}
