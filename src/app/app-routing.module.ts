import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DraftHomeComponent } from './draft-home/draft-home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: DraftHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
