import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { BikesComponent } from './components/bikes/bikes.component';
import { CarsComponent } from './components/cars/cars.component';
import { ViewComponent } from './components/view/view.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { BookingComponent } from './components/booking/booking.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AddComponent } from './components/add/add.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserComponent,
    children:[
      {path:'bikes',component:BikesComponent},
      {path:'cars',component:CarsComponent},
      {path:'view/:id',component:ViewComponent},
      {path:'wish',component:WishlistComponent},
      {path:'booking',component:BookingComponent},
      {path:'order',component:OrdersComponent}
    ]
  },
  {path:'admin',component:AdminComponent,
    children:[
      {path:'bikes',component:BikesComponent},
      {path:'cars',component:CarsComponent},
      {path:'add',component:AddComponent},
      {path:'manage',component:ManageComponent},
      {path:'order',component:OrdersComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
