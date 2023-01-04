import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/user/cart/cart.component';
import { AdminCustomerComponent } from './components/admin/customer/customer.component';
import { UserCustomerComponent } from './components/user/customer/customer.component';
import { AdminProductComponent } from './components/admin/product/product.component';
import { UserProductComponent } from './components/user/product/product.component';
import { ShipperComponent } from './components/admin/shipper/shipper.component';
import { SupplierComponent } from './components/admin/supplier/supplier.component';
import { OrderComponent} from './components/admin/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {path : 'adminproduct', component: AdminProductComponent},
  {path : 'userproduct', component: UserProductComponent},
  {path : 'shipper', component: ShipperComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'cart', component: CartComponent},
  {path: 'admincustomer', component: AdminCustomerComponent},
  {path: 'usercustomer', component: UserCustomerComponent},
  {path: 'order', component: OrderComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'user', component: UserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
