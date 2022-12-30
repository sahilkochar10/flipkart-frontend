import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ProductComponent } from './components/product/product.component';
import { ShipperComponent } from './components/shipper/shipper.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { OrderComponent} from './components/order/order.component'

const routes: Routes = [
  {path : '', component: ProductComponent},
  {path : 'shipper', component: ShipperComponent},
  {path: 'supplier', component: SupplierComponent},
  {path: 'cart', component: CartComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'order', component: OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
