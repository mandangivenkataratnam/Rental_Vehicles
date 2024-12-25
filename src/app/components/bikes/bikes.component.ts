import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
  bikes:any;
  constructor(private service:VehicleService, private router:Router){}

  ngOnInit(){
    this.service.getBikes().subscribe((res)=>{
      this.bikes = res
    })
  }

  openvehicle(vid:any){
    this.router.navigateByUrl('/user/view/'+vid)  
  }
}
