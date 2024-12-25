import { Component } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  vehicle:any
  addVehicle:FormGroup = new FormGroup({})
  constructor(private fb:FormBuilder, private service:VehicleService,
    private router:Router
  ){
    this.addVehicle = this.fb.group({        
       vehicleId:['',Validators.required],
       vehicleName:['',Validators.required],
       vehicleCompany:['',Validators.required],
       vehiclePrice:['',Validators.required],
       vehicleType:['',Validators.required],
       vehicleImage:['',Validators.required],
       fuelType:['',Validators.required],
       availableTime:['',Validators.required],
       seatingCapacity:['',Validators.required],
       rating:['',Validators.required]
    })
  }

  addNow(){
    console.log(this.addVehicle.value)
    this.vehicle = this.service.addNewVehicle(this.addVehicle.value)
    Swal.fire({
      title: "Good job!",
      text: this.vehicle,
      icon: "success"
    });
    this.router.navigateByUrl('/admin/add')
  }

}
