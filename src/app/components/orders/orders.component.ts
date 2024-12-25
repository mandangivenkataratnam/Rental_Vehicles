import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../services/order.service';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  vehicles:any;
  constructor(private order:OrderService, private router:Router, private service:VehicleService){}

  ngOnInit(){
    this.order.getOrders().subscribe((res)=>{
      this.vehicles = res
    })
  }

  deleteNow(sid:any){
    this.service.deleteVehicle(sid)
  }
}
