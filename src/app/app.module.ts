import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LayoutModule} from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AppComponent } from './app.component';
import { SelectpageComponent } from './selectpage/selectpage.component';
import {MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { CompanyformComponent } from './companyform/companyform.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ResjobseekerComponent } from './resjobseeker/resjobseeker.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import { JobseekerloginComponent } from './jobseekerlogin/jobseekerlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    SelectpageComponent,
    EmployeeformComponent,
    CompanyformComponent,
    ResjobseekerComponent,
    JobseekerloginComponent
  ],
  imports: [
    NgMultiSelectDropDownModule,
    AngularMultiSelectModule,
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    NgbModule,
    HttpModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
