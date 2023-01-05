import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Supplier, SupplierVo } from 'src/app/models/Supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private _base = 'http://localhost:9374/api/v1/supplier'
  private _supplierListModified = new Subject<void>();
  supplierlist : Supplier[] = []
//   cartListSet = new Set();
  constructor(
    private httpClient: HttpClient
  ) {}
  

  get supplierListModified() {
    return this._supplierListModified;
  }

  getSuppliers(): Observable<Supplier[]> {
    console.log("on getSuppliers")
    return this.httpClient.get<Supplier[]>(this._base)
  }
  addSuppliers(supplier: SupplierVo): any {
    return this.httpClient.post(this._base, [supplier], { responseType: 'text' }).pipe(
      tap(() => {
        this._supplierListModified.next();
      })
    );
  }

  editSupplier(supplier : any){
    supplier.supplierID=supplier.s
    return this.httpClient.put(this._base , [supplier], {responseType: 'text'}).pipe(
      tap(() => {
        this._supplierListModified.next();
      })
    );
  }
  deleteSupplier(id) {
    return this.httpClient.delete(this._base + '/' + id, { responseType: 'text' }).pipe(
      tap(() => {
        this._supplierListModified.next();
      })
    );
  }

}
