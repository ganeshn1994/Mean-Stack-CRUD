import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { UserCon } from '../../user';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  closeResult: string;
  users:any;

  constructor(private _userService: UserService, private router:Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.readUser();
  }
  

  readUser(){
    this._userService.readUser().subscribe(
      data=>{
        console.log(data);
        this.users=data;
      },
      error=>{
        console.log(error);
      }
      
    )
  }
  doUpdate(user){
    this._userService.setter(user);
    this.router.navigate(['/createUpdate']);

  }

  doDelete(user){
    this._userService.deleteUser(user._id).subscribe(
      data =>{
        console.log(data);
        this.users.splice(this.users.indexOf(user),1);
      },
      error=>{
        console.log(error);
      }

    )
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


}
