import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DraftHomeComponent } from './draft-home/draft-home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProspectsService } from './services/prospects.service';

@NgModule({
  declarations: [
    AppComponent,
    DraftHomeComponent
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
