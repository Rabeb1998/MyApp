import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './dashboard/detail/detail.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { HelpsComponent } from './helps/helps.component';
import { NewComponent } from './helps/new/new.component';
import { SeeAllComponent } from './helps/see-all/see-all.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'employee', component:EmployeeComponent},
  {path: 'department', component:DepartmentComponent},
  {path: 'helps', component:HelpsComponent},
  {path: 'see/:id', component:SeeAllComponent},
   {path : 'new', component: NewComponent},
   {path: 'detail', component:DetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
