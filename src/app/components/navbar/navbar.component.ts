import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'; 
import { UserService } from '../../shared/user.service';
import { UserCon } from '../../user';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ListComponent } from '../list/list.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';  
import 'rxjs/add/operator/toPromise'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
@Injectable()
export class NavbarComponent implements OnInit {
  
  apiRoot:string = 'http://localhost:3031/user/userlist';
  results:any;
  loading:boolean;
  name:string ='';
    constructor(private http:HttpClient, private router: Router, private userService:UserService) { 
    this.results = [];
    this.loading = false;
  }
  onNameKeyUp(event:any){
    this.name = event.target.value;
  }
  
  ngOnInit() {
  }
  search(name:string) {

    let promise = new Promise((resolve, reject) => {
      //TODO
      let promise = new Promise((resolve, reject) => {
        let apiURL = `${this.apiRoot}?name=${this.name}`;
        this.http.get(apiURL)
          .toPromise()
          .then(
            res => { 
              // Success
              this.results=res;
              console.log(res)
              resolve();
            },
            msg => { // Error
              reject(msg);
              }
          );
      });
    });
    return promise;
  }

}
