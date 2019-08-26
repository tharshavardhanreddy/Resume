import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router, Event} from '@angular/router';
import {ip} from '../../config/url';

import * as $ from 'jquery';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  city: string = '';
  ip: string;
  name: string = '';
  phonenumber: number;
  company: string = '';
  designation: string = '';
  skill: string = '';
  skillD: string = '';
  email: string = '';
  experience: string = '';
  selectedFile: any;
  titleAlert: string = 'This field is required';
  uploadfiles: Array<File>;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  private headers: Headers = new Headers();

  constructor(private fb: FormBuilder, public http: Http , public router: Router) {
    this.ip = ip.url;
    this.dropdownList = [
      { item_id: 1, item_text: 'Html'},
      { item_id: 2, item_text: 'CSS'},
      { item_id: 3, item_text: 'JAVA' },
      { item_id: 4, item_text: 'JS' },
      { item_id: 5, item_text: 'SAP' },
      { item_id: 6, item_text: 'Angular'},
      { item_id: 7, item_text: 'Python'},
      { item_id: 8, item_text: 'React' },
      { item_id: 9, item_text: 'Mongo' },
      { item_id: 10, item_text: 'SQL' }
    ];
    console.log(this.selectedItems);
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 5,
      allowSearchFilter: true
    };

    this.rForm = fb.group({
      name: [null, Validators.required],
      company: [null, Validators.required],
      designation: [null, Validators.required],
      phonenumber: [null, Validators.required],
      skill: [null, Validators.required],
      skillD: [null, Validators.required],
      email: [null, Validators.required],
      experience: [null, Validators.required],
      city: [null, Validators.required],
      validate: ''
    });
  }

  //   onFileChanged(event) {
  //     this.selectedFile = event.target.files[0];
  //     this.http.post('url', uploadData, {
  //         reportProgress: true,
  //         observe: 'events'
  //     }).subscribe(event => {
  //         console.log('uploaded successfully');
  //     });
  // }
  fileChange(eventvalue) {
    console.log(eventvalue.target.files);
    this.uploadfiles = eventvalue.target.files;


  }

  ngOnInit() {
    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('name').setValidators(Validators.required);
        }
        this.rForm.get('name').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('phonenumber').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('phonenumber').setValidators(Validators.required);
        }
        this.rForm.get('phonenumber').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('city').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('city').setValidators(Validators.required);
        }
        this.rForm.get('city').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('designation').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('designation').setValidators(Validators.required);
        }
        this.rForm.get('designation').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('skill').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('skill').setValidators(Validators.required);
        }
        this.rForm.get('skill').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('skillD').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('skillD').setValidators(Validators.required);
        }
        this.rForm.get('skillD').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('email').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('email').setValidators(Validators.required);
        }
        this.rForm.get('email').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('experience').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('experience').setValidators(Validators.required);
        }
        this.rForm.get('experience').updateValueAndValidity();
      }
    );

  }

  onItemSelect(item: any) {
    console.log(typeof(item));
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log('ittem');
    console.log(item);
    this.selectedItems = $.grep(this.selectedItems, ( element, index) => {
return element.item_id === item.item_id;
    }, true);
    console.log(this.selectedItems.length);
    console.log(this.selectedItems);

  }
  onSelectAll(items: any) {
    console.log(items);
    this.selectedItems = items;
  }
  onDeSelectAll(items: any) {
    console.log(items);
    this.selectedItems.splice(items);
    this.selectedItems = $.grep(this.selectedItems, ( element, index) => {
      return element.item_id === items.item_id;
          }, true);
    console.log(this.selectedItems.length);
    console.log(this.selectedItems);
  }

  addPost(post) {
    const details = {
skills: this.selectedItems ,
skilldemand: post.skillD,
designation: post.designation,
phonenumber: post.phonenumber,
email : post.email,
city : post.city,
name : post.name,
experience : post.experience
    };
    console.log(JSON.stringify(details));
    // this.company = post.company;
    // this.skill = post.skill;
    // this.skillD = post.skillD;
    // this.designation = post.designation;
    // this.phonenumber = post.phonenumber;
    // this.email = post.email;
    // this.city = post.city;
    // this.name = post.name;
    // this.experience = post.experience;

    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post(this.ip + '/api/jobseeker', details, { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
      if (response === 'inserted') {
        alert('sucessfully registered');
        this.router.navigate(['']);

      }
    });
  }

  array(arr, value) {
    this.selectedItems.filter((ele) => {
      return ele !== value;
    });
  }

}
