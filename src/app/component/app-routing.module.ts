import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SortingHomeComponent } from './sorting-home/sorting-home.component';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  { path: 'sort-home', component: SortingHomeComponent },
  {path: 'home', component: AppHomeComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
      ],
      exports: [RouterModule]
})
export class AppRoutingModule { }
