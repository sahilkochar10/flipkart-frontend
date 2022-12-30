import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private productService : ProductsService) { }

  getCartList(){
    this.productService.cartList=JSON.parse(localStorage.getItem('cartList'))
    return this.productService.cartList
  }
  removeCartProduct(product){
    localStorage.setItem('cartList', JSON.stringify(this.productService.cartList.filter(p => p.productID != product.productID)))
    return this.getCartList()
  }
}
