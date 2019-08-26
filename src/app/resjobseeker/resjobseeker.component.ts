import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {ip} from '../../config/url';

@Component({
  selector: 'app-resjobseeker',
  templateUrl: './resjobseeker.component.html',
  styleUrls: ['./resjobseeker.component.css']
})
export class ResjobseekerComponent implements OnInit {
loading: any;
url: string;
ip: string;
  constructor(private http: Http, private router: Router) {
    this.ip = ip.url;
   }

  ngOnInit() {
  }

  jregister(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('constant-type', 'application/json');
    this.http.post(this.ip + '/api/resjobseek', data.form.value, { headers }).map(res => res.json()).subscribe(dataa => {
      console.log(dataa);
      this.router.navigate(['/jobseekerlogin']);
    });
  }
}
