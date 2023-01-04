import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from 'src/app/services/products.service';
import { AdminProductComponent } from './components/admin/product/product.component';
import { UserProductComponent } from './components/user/product/product.component';
import { CartComponent } from './components/user/cart/cart.component';
import { SupplierComponent } from './components/admin/supplier/supplier.component';
import { ShipperComponent } from './components/admin/shipper/shipper.component';
import { FormsModule } from '@angular/forms';
import { AdminCustomerComponent } from './components/admin/customer/customer.component';
import { UserCustomerComponent } from './components/user/customer/customer.component';
import {OrderComponent} from './components/admin/order/order.component';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminProductComponent,
    UserProductComponent,
    CartComponent,
    SupplierComponent,
    ShipperComponent,
    AdminCustomerComponent,
    UserCustomerComponent,
    OrderComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
