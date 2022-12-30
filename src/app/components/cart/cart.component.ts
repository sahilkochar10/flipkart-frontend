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
  cartList : Product[]
  constructor(private cartService : CartService, private orderService: OrderService) {

   
   }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList()
  }
  removeCartProduct(cart){
    this.cartList=this.cartService.removeCartProduct(cart)
  }
  emptyCart(){
    this.cartList=[]
    localStorage.setItem('cartList','[]')
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
