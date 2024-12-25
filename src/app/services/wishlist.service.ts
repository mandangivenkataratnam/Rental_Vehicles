import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  wishList:any = [];

  getVehicles(){
    return of(this.wishList)
  }

  addToWishlist(newVehicle:any){
    this.wishList.push(newVehicle)
  }

  getLengthOfWishlist(){
    return this.wishList.length;
  }

  constructor() { }
}
