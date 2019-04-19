import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { ListEmployeeComponent } from './Employee/list-employee.component';
import { CreateEmployeeComponent } from './Employee/create-employee.component';

const routes: Routes = [

  {
    path :'List', component: ListEmployeeComponent
  },
  {
    path :'Create', component: CreateEmployeeComponent
  },
  {
    path :'', redirectTo: '/List', pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
