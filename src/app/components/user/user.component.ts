import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistService } from '../../services/wishlist.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  user:any;
  userName:any;
  length:any;
  constructor(private router:Router,private wish:WishlistService){}
  
  ngOnInit() {
    if (localStorage.getItem('loggedin') === null) {
      this.router.navigateByUrl('/');
    } else {
      this.user = JSON.parse(localStorage.getItem('loggedin')!); 
      this.userName = this.user; 
      console.log(this.user);
    }
  }
  
  ngDoCheck(){
    this.length = this.wish.getLengthOfWishlist();
  }

  logOut(){
    localStorage.removeItem('loggedin')
    this.router.navigateByUrl('/')
  }
}

