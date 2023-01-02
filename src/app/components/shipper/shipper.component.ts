import { Component, OnInit } from '@angular/core';
import { Shipper, ShipperVo } from 'src/app/models/Shipper';
import {ShipperService} from 'src/app/services/shipper.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shipper',
  templateUrl: './shipper.component.html',
  styleUrls: ['./shipper.component.css']
})
export class ShipperComponent implements OnInit {
  shippers: ShipperVo[];
  addBtnState: boolean = false;
  editBtnState: boolean = false;
  range: number = 0;
  shipperVo: ShipperVo = new ShipperVo();


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
  addShippers() {
    console.log(this.shipperVo)
    this.changeAddBtnState()
    this.shipperService.addShippers(this.shipperVo)
      .subscribe(res => {
        Swal.fire({
          title: "Shipper Added",
          timer: 1500
        })
      },
        (error: any) => {
          console.log(error)
          alert(error.error)
        });
    this.shipperVo = new ShipperVo();
  }

 

  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }
  
  changeEditBtnState(){
    this.editBtnState = !this.editBtnState
  }

 

  editShipper() {
    console.log(this.shipperVo)
    this.changeEditBtnState()
    this.shipperService.editShipper(this.shipperVo)
    .subscribe(res => {
      Swal.fire({
        title: "Shipper Edited",
        timer: 1500
      })
    })
    this.shipperVo = new ShipperVo()
  }

  setEditShipperId(shipper){
    this.shipperVo = shipper
    this.changeEditBtnState()
  }


}

