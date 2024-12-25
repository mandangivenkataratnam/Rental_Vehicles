import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  user:any;
  userName:any;
  constructor(private router:Router){}
  
  ngOnInit() {
    if (localStorage.getItem('loggedin') === null) {
      this.router.navigateByUrl('/');
    } else {
      this.user = JSON.parse(localStorage.getItem('loggedin')!); 
      this.userName = this.user; 
      console.log(this.user);
    }
  }
  

  logOut(){
    localStorage.removeItem('loggedin')
    this.router.navigateByUrl('/')
  }
}
