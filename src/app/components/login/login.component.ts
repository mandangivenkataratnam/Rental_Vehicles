import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userName:any;
  password:any;
  user:any;
  reqpwd:any;

  loginForm:FormGroup = new FormGroup({});

  constructor(private router:Router, private fb:FormBuilder){
    this.loginForm = this.fb.group({
      userName:['',Validators.required],
      password:['',Validators.required]
    })
  }
   

  checkLogin(){
    this.reqpwd = this.loginForm.value.userName.slice(0,3)+'@123';
    
    if(this.loginForm.value.userName=='admin' && this.loginForm.value.password=='admin@123'){
      Swal.fire({
        title: "Good job!",
        text: "Your Login is Success",
        icon: "success"
      });

      localStorage.setItem('loggedin',JSON.stringify(this.loginForm.value.userName))

      this.router.navigateByUrl('admin/cars')
    }
    else if(this.loginForm.value.password==this.reqpwd){
      Swal.fire({
        title: "Good job!",
        text: "Your Login is Success",
        icon: "success"
      });

      localStorage.setItem('loggedin',JSON.stringify(this.loginForm.value.userName))

      this.router.navigateByUrl('user/cars')
    }
    else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
}
