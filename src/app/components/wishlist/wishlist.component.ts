import { Component } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  vehicles:any;
  constructor(private wish:WishlistService, private router:Router){}

  ngOnInit(){
    this.wish.getVehicles().subscribe((res)=>{
      this.vehicles = res
    })
  }
}
