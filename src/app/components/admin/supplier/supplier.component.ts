import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/models/Supplier';
import {SupplierService} from 'src/app/services/supplier.service'

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
  suppliers: Supplier[]


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

}
