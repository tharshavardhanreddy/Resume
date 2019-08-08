import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectpageComponent } from './selectpage/selectpage.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { CompanyformComponent } from './companyform/companyform.component';



const routes: Routes = [

  {path : '', component: SelectpageComponent},
  {path : 'select', component: SelectpageComponent},
  {path : 'employeeform', component: EmployeeformComponent},
  {path : 'companyform', component: CompanyformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
