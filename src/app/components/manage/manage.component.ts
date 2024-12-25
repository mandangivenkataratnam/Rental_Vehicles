import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  vehicles:any;
  updateVehicle:any;
  constructor(private service:VehicleService){}

  ngOnInit(){
    this.service.getAllVehicles().subscribe((v)=>{
      this.vehicles = v 
      console.log(this.vehicles)
    })
  }

  deleteNow(sid:any){
    this.service.deleteVehicle(sid)
  }

  vehicleSelected(pro:any){
    this.updateVehicle = pro
  }

  updateNow(){
    this.service.updateVehicles(this.updateVehicle.studentId,this.updateVehicle)
  }
}
