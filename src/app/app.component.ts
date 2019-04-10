import { Component } from '@angular/core';
import { ProspectsService } from './services/prospects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nfl-mock-draft';
  prospects = [];

  constructor(private ps: ProspectsService){}

  getProspects(){
    this.ps.getProspects().subscribe(res=>{
      for(let i=0; this.prospects.length<10; i++){
        if(res[i]['position']=='EDGE'){
        this.prospects.push(res[i]);
      }}
      console.log(this.prospects);
    })
  }
}
