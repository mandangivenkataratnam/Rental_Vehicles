import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { WishlistService } from '../../services/wishlist.service';
import Swal from 'sweetalert2';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  vid:any;
  vehicle:any;
  orderedVehicle:any;
  uname:any;
  uaddress:any;
  utime:any;
  newOreder:any;

  constructor(private router:ActivatedRoute, private order:OrderService , private bs:Router, private service:VehicleService, private wish:WishlistService){}

  ngOnInit(){
    this.vid=this.router.snapshot.params['id'];
    if(this.vid != null){
      this.vehicle=this.service.getVehicleById(this.vid)
    }
  }

  addToWishlist(vehicle:any){
    this.wish.addToWishlist(vehicle)
    Swal.fire({
      title: "Good job!",
      text: "Added Success",
      icon: "success"
    });

    this.bs.navigateByUrl('/user/wish')
  }

  orderNow(){
    this.newOreder = {
      vehicleId:this.orderedVehicle.vehicleId,
      vehicleName:this.orderedVehicle.vehicleName,
      vehiclePrice:this.orderedVehicle.vehiclePrice,
      username:this.uname,
      address:this.uaddress,
      time:this.utime
    }

    this.order.addToOrders(this.newOreder);

    Swal.fire({
      title: "Good job!",
      text: "Order Placed Successfully",
      icon: "success"
    });
    
    this.bs.navigateByUrl('/user/order')

  }
}
