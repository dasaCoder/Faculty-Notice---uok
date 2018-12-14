import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepListComponent } from './dep-list/dep-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'department/:dep', component: DepListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
