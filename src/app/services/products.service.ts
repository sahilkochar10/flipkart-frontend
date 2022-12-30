import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Product, ProductVo } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _base = 'http://localhost:9374/api/v1/products'
  private _productListModified = new Subject<void>();
  cartList : Product[] = []
  
  constructor(
    private httpClient: HttpClient
  ) {
    this.cartList=JSON.parse(localStorage.getItem('cartList'))
  }
  

  get productListModified() {
    return this._productListModified;
  }

  getProducts(): Observable<Product[]> {
    console.log("on getProducts")
    return this.httpClient.get<Product[]>(this._base)
  }

  addProducts(product: ProductVo): any {
    return this.httpClient.post(this._base, [product], { responseType: 'text' }).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }

  deleteProduct(id) {
    return this.httpClient.delete(this._base + '/' + id, { responseType: 'text' }).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }

  editProduct(product : any){
    product.supplierID=product.supplier.supplierID
    return this.httpClient.put(this._base , [product], {responseType: 'text'}).pipe(
      tap(() => {
        this._productListModified.next();
      })
    );
  }

  addCartList(productID){
    
    this.updateCartList()
  }

  checkBtnState(productID){
    let a = false
    this.updateCartList()
    this.cartList.forEach(product => {
      if (product.productID===productID){
        a = true
      }
    })
    return a
    // return this.cartListSet.has(productID)
    // this.cartListSet.forEach(e => if(e.productID))
  }
  
  updateCartList(){
    localStorage.setItem('cartList',JSON.stringify(this.cartList))
  }
}

