import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Customer, CustomerVo } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private _base = 'http://localhost:9374/api/v1/customers'
  private _customerListModified = new Subject<void>();
  customerlist : Customer[] = []
//   cartListSet = new Set();
  constructor(
    private httpClient: HttpClient
  ) {}
  

  get customerListModified() {
    return this._customerListModified;
  }

  getCustomers(): Observable<Customer[]> {
    console.log("on getCustomers")
    return this.httpClient.get<Customer[]>(this._base)
  }
  addProducts(customer: CustomerVo): any {
    return this.httpClient.post(this._base, [customer], { responseType: 'text' }).pipe(
      tap(() => {
        this._customerListModified.next();
      })
    );
  }
}
