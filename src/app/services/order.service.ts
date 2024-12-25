import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders:any = [];

  getOrders(){
    return of(this.orders)
  }

  addToOrders(newOrder:any){
    this.orders.push(newOrder);
  }

  constructor() { }
}
