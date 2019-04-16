import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { DraftHomeComponent } from './draft-home/draft-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProspectsService } from './services/prospects.service';
import { TeamAreaComponent } from './teams/team-area/team-area.component';
import { TeamCardComponent } from './teams/team-card/team-card.component';
import { ProspectAreaComponent } from './prospects/prospect-area/prospect-area.component';
import { TeamsService } from './services/teams.service';


@NgModule({
  declarations: [
    AppComponent,
    DraftHomeComponent,
    TeamAreaComponent,
    TeamCardComponent,
    ProspectAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [ProspectsService, TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
