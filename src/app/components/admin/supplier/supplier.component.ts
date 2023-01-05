import { Component, OnInit } from '@angular/core';
import { Supplier, SupplierVo } from 'src/app/models/Supplier';
import {SupplierService} from 'src/app/services/supplier.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: SupplierVo[]
  addBtnState: boolean = false;
  editBtnState: boolean = false;
  range: number = 0;
  supplierVo : SupplierVo = new SupplierVo();


  constructor(private supplierService: SupplierService) { }

  async ngOnInit() { 
    this.getSuppliers()
    this.supplierService.supplierListModified.subscribe(res => {
      this.getSuppliers()
    })  
  }
  getSuppliers(): any{
    this.supplierService.getSuppliers().subscribe(res =>{
      this.suppliers=res
    })
  }
  // changeEditBtnState(){
  //   this.editBtnState = !this.editBtnState
  // }

 
  addSuppliers() {
    console.log(this.supplierVo)
    this.changeAddBtnState()
    this.supplierService.addSuppliers(this.supplierVo)
      .subscribe(res => {
        Swal.fire({
          title: "Supplier Added",
          timer: 1500
        })
      },
        (error: any) => {
          console.log(error)
          alert(error.error)
        });
    this.supplierVo = new SupplierVo();
  }

  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }
  changeEditBtnState(){
    this.editBtnState = !this.editBtnState
  }

  editSupplier() {
    console.log(this.supplierVo)
    this.changeEditBtnState()
    this.supplierService.editSupplier(this.supplierVo)
    .subscribe(res => {
      Swal.fire({
        title: "Supplier Edited",
        timer: 1500
      })
    })
    this.supplierVo = new SupplierVo()
  }

  setEditSupplierId(supplier){
    this.supplierVo = supplier
    this.changeEditBtnState()
  }
  deleteSupplier(id) {
    this.supplierService.deleteSupplier(id)
      .subscribe(res => {
        Swal.fire({
          title: "Supplier Deleted",
          timer: 1500
        })
  })}

}
