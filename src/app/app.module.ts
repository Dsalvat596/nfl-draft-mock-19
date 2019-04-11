import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DraftHomeComponent } from './draft-home/draft-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProspectsService } from './services/prospects.service';
import { TeamAreaComponent } from './teams/team-area/team-area.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { ProspectAreaComponent } from './prospects/prospect-area/prospect-area.component';

@NgModule({
  declarations: [
    AppComponent,
    DraftHomeComponent,
    TeamAreaComponent,
    TeamCardComponent,
    ProspectAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProspectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
