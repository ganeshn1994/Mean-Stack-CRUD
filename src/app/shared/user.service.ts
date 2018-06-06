import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UserCon} from '../user';

@Injectable()
export class UserService {
  private user:UserCon;
  private baseUri : string="http://localhost:3031/user";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(public http:HttpClient) { }

  createUser(user:UserCon){
    return this.http.post(this.baseUri+'/useradd',user,{headers:this.headers})
  }
  readUser(){
    return this.http.get(this.baseUri+'/userlist',{headers:this.headers})
  }
  updateUser(user:UserCon){
    return this.http.put(this.baseUri+'/update',user,{headers:this.headers})
  }
  deleteUser(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers})
  }
  setter(user:UserCon){
    this.user=user;
  }
  getter(){
    return this.user;
  }

}
