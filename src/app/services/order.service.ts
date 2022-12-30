import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Order, OrderVo } from 'src/app/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _base = 'http://localhost:9374/api/v1/order'
  private _orderListModified = new Subject<void>();
  orderlist : Order[] = []
//   cartListSet = new Set();
  constructor(
    private httpClient: HttpClient
  ) {}
  

  get orderListModified() {
    return this._orderListModified;
  }

  getOrders(): Observable<Order[]> {
    console.log("on getOrders")
    return this.httpClient.get<Order[]>(this._base)
  }
  addOrders(order: OrderVo) {
    return this.httpClient.post(this._base, order, { responseType: 'text' }).pipe(
      tap(() => {
        this._orderListModified.next();
      })
    );
  }

}
