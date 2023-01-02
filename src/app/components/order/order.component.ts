import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails } from 'src/app/models/Order';
import {OrderService} from 'src/app/services/order.service'
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
    orders: Order[]
  // totalv(orderDetails: OrderDetails[]){
  //   let tv = 0
  //   console.log(orderDetails.length);
    
  //   console.log("hello");
    
  // }
  totalv(){
    console.log("hello");
    // console.log(this.orders);
    
    
  }

  
  constructor(private orderService: OrderService, private productService: ProductsService) {
    // productService.getProducts().subscribe(p1=> {
    //   this.pro= p1
    // })
   }

  async ngOnInit() { 
    this.getOrders()
    // this.orderService.orderListModified.subscribe(res => {
    //   this.getOrders()
    // })  
  }

  getOrders(): any{
    this.orderService.getOrders().subscribe(res =>{
      this.orders=res
      console.log("hi");
    })
  }

}