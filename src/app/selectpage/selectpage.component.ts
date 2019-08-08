import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-selectpage',
  templateUrl: './selectpage.component.html',
  styleUrls: ['./selectpage.component.css']
})
export class SelectpageComponent implements OnInit {

  constructor( public router: Router) { }

  ngOnInit() {
  }
  employee() {
    this.router.navigate(['/employeeform']);
 }

 company() {
 this.router.navigate(['/companyform']);
 }

}
