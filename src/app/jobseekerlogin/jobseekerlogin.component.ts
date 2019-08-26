import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ip } from '../../config/url';

@Component({
  selector: 'app-jobseekerlogin',
  templateUrl: './jobseekerlogin.component.html',
  styleUrls: ['./jobseekerlogin.component.css']
})
export class JobseekerloginComponent implements OnInit {
  ip: string;

  constructor(private http: Http, private router: Router) {
    this.ip = ip.url;
  }

  ngOnInit() {
  }

  userlog(data) {
    console.log(data.form.value);
    const headers = new Headers();
    headers.append('constant-type', 'application/json');
    this.http.post(this.ip + '/api/jobseekerlogin', data.form.value, { headers }).map(res => res.json()).subscribe(dataa => {
      console.log(dataa);
      if (dataa.status === '200') {
        this.router.navigate(['/employeeform']);
      } else if (dataa === 'invalid' ) {
        alert('enter correct credentials');

      }
    });
  }
}
