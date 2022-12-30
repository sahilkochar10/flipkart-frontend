import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import {OrderService} from 'src/app/services/order.service'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  shippers: Order[]
    orders: any;


  constructor(private orderService: OrderService) { }

  async ngOnInit() { 
    this.getOrders()
    this.orderService.orderListModified.subscribe(res => {
      this.getOrders()
    })  
  }
  getOrders(): any{
    this.orderService.getOrders().subscribe(res =>{
      this.orders=res
    })
  }

}