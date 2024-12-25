import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
  cars:any;
  constructor(private service:VehicleService, private router:Router){}

  ngOnInit(){
    this.service.getCars().subscribe((res)=>{
      this.cars = res
    })
  }

  openvehicle(vid:any){
    this.router.navigateByUrl('/user/view/'+vid)  
  }
  
}
