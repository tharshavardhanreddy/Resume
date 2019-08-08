import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companyform',
  templateUrl: './companyform.component.html',
  styleUrls: ['./companyform.component.css']
})
export class CompanyformComponent implements OnInit {

  rForm: FormGroup;
  post: any;                     // A property for our submitted form
  clocation: string = '';
  cname: string = '';
  cphonenumber: number;
  cdesignation: string = '';
  vacancy: string = '';
  cskill: string = '';
  cemail: string = '';
  cexperience: string = '';
  selectedFile: any;
  titleAlert: string = 'This field is required';
  uploadfiles: Array<File>;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  private headers: Headers = new Headers();

  constructor(private fb: FormBuilder, public http: Http, public router: Router) {
    this.dropdownList = [
      { item_id: 1, item_text: 'Html' },
      { item_id: 2, item_text: 'CSS' },
      { item_id: 3, item_text: 'JAVA' },
      { item_id: 4, item_text: 'JS' },
      { item_id: 5, item_text: 'SAP' },
      { item_id: 6, item_text: 'Angular' },
      { item_id: 7, item_text: 'Python' },
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
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.rForm = fb.group({
      cname: [null, Validators.required],
      cdesignation: [null, Validators.required],
      cphonenumber: [null, Validators.required],
      clocation: [null, Validators.required],
      cskill: [null, Validators.required],
      cemail: [null, Validators.required],
      cexperience: [null, Validators.required],
      vacancy: [null, Validators.required],
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
          this.rForm.get('cname').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cname').setValidators(Validators.required);
        }
        this.rForm.get('cname').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('cphonenumber').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cphonenumber').setValidators(Validators.required);
        }
        this.rForm.get('cphonenumber').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('vacancy').setValidators([Validators.required, Validators.minLength(1)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('vacancy').setValidators(Validators.required);
        }
        this.rForm.get('vacancy').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('cdesignation').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cdesignation').setValidators(Validators.required);
        }
        this.rForm.get('cdesignation').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('clocation').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('clocation').setValidators(Validators.required);
        }
        this.rForm.get('clocation').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('cskill').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cskill').setValidators(Validators.required);
        }
        this.rForm.get('cskill').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('cemail').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cemail').setValidators(Validators.required);
        }
        this.rForm.get('cemail').updateValueAndValidity();
      }
    );

    this.rForm.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate === '1') {
          this.rForm.get('cexperience').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.rForm.get('cexperience').setValidators(Validators.required);
        }
        this.rForm.get('cexperience').updateValueAndValidity();
      }
    );
  }

  onItemSelect(item: any) {
    console.log(item);
    this.selectedItems.push(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
    this.selectedItems.push(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

  addPost(post) {
    console.log(post);
    const cdetails = {
      name: post.cname,
      designation: post.cdesignation,
      email: post.cemail,
      experience: post.cexperience,
      location: post.clocation,
      phonenumber: post.cphonenumber,
      vacancy: post.vacancy,
      skills: this.selectedItems
    };

    // addPost(post) {
    //   this.clocation = post.clocation;
    //   this.cskill = post.cskill;
    //   this.cdesignation = post.cdesignation;
    //   this.cphonenumber = post.cphonenumber;
    //   this.cemail = post.cemail;
    //   this.cvacancy = post.cvacancy;
    //   this.cname = post.cname;
    //   this.cexperience = post.cexperience;

    const headers = new Headers();
    headers.append('content-type', 'application/json');
    this.http.post('http://192.168.0.192:4500/api/companyjob', cdetails, { headers }).map(res => res.json()).subscribe(response => {
      console.log(response);
      if (response === 'inserted') {
        alert("sucessfully registered");
        this.router.navigate(['']);

      }
    });
  }

}
