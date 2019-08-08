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

@NgModule({
  declarations: [
    AppComponent,
    SelectpageComponent,
    EmployeeformComponent,
    CompanyformComponent
  ],
  imports: [
    NgMultiSelectDropDownModule,
    AngularMultiSelectModule,
    BrowserModule,
    LayoutModule,
    NgbModule,
    HttpModule,
    MatCheckboxModule,
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
