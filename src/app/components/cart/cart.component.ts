import { Component, OnInit } from '@angular/core';
import { OrderDetails, OrderVo } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  total: number=0
  cartList : Product[]
  constructor(private cartService : CartService, private orderService: OrderService) {
      
   
   }

   calculateTotal(){
    this.total=0
    this.cartList.forEach(element => {
      this.total+=element.price
    });
   }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList()
    this.calculateTotal()
  }
  removeCartProduct(cart){
    this.cartList=this.cartService.removeCartProduct(cart)
    this.calculateTotal()
  }
  emptyCart(){
    this.cartList=[]
    localStorage.setItem('cartList','[]')
    this.calculateTotal()
  }

  
  buynow(){
    let date = new Date()
    let orderDetails: OrderDetails[]= []
    this.cartList.forEach(element => {
      orderDetails.push({
        productID: element.productID,
        quantity: 1
      })
      
    });
    let order:OrderVo={
      customerID: 21,
      date: date.toISOString().split('T')[0],
      shipperID:10001,
      orderDetails: orderDetails
    }
    this.orderService.addOrders(order).subscribe(o =>{
      alert('Order Successful')
      this.emptyCart()
    })
  }
}
