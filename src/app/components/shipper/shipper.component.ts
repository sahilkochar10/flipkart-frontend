import { Component, OnInit } from '@angular/core';
import { Shipper } from 'src/app/models/Shipper';
import {ShipperService} from 'src/app/services/shipper.service'

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {
  shippers: Shipper[]


  constructor(private shipperService: ShipperService) { }

  async ngOnInit() { 
    this.getShippers()
    this.shipperService.shipperListModified.subscribe(res => {
      this.getShippers()
    })  
  }
  getShippers(): any{
    this.shipperService.getShippers().subscribe(res =>{
      this.shippers=res
    })
  }

}
