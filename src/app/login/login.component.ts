import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    data:String="Welcome to login page"
    secondData="Enter username"
    uname:any=""
    psw:any=""

    constructor(){ }

    login(){
      alert("Login clicked")
    }

    accessUname(event:any){
      this.uname=event.target.value
      console.log(this.uname);
    }

    accessPsw(event:any){
      this.psw=event.target.value
      console.log(this.psw);
    }
}
