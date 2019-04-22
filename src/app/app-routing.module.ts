import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftHomeComponent } from './draft-home/draft-home.component';
import { DraftResultsComponent } from './draft-results/draft-results.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: DraftHomeComponent },
  { path: 'results', component: DraftResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
