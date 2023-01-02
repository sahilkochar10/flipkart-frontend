import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, tap } from 'rxjs';
import { Shipper, ShipperVo } from 'src/app/models/Shipper';

@Injectable({
  providedIn: 'root'
})
export class ShipperService {
  private _base = 'http://localhost:9374/api/v1/shipper'
  private _shipperListModified = new Subject<void>();
  shipperlist : Shipper[] = []
//   cartListSet = new Set();
  constructor(
    private httpClient: HttpClient
  ) {}
  

  get shipperListModified() {
    return this._shipperListModified;
  }

  getShippers(): Observable<Shipper[]> {
    console.log("on getShippers")
    return this.httpClient.get<Shipper[]>(this._base)
  }
  addShippers(shipper: ShipperVo): any {
    return this.httpClient.post(this._base, [shipper], { responseType: 'text' }).pipe(
      tap(() => {
        this._shipperListModified.next();
      })
    );
  }

  editShipper(shipper : any){
    shipper.shipperID=shipper.s
    return this.httpClient.put(this._base , [shipper], {responseType: 'text'}).pipe(
      tap(() => {
        this._shipperListModified.next();
      })
    );
  }



}
