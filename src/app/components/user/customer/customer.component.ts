import { Component, OnInit } from '@angular/core';
import { Customer, CustomerVo} from 'src/app/models/Customer';
import {CustomerService} from 'src/app/services/customer.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class UserCustomerComponent implements OnInit {
  products: CustomerVo[];
  addBtnState: boolean = false;
  editBtnState: boolean = false;
  range: number = 0;
  customerVo: CustomerVo = new CustomerVo();
  customers: Customer[];


  constructor(private customerService: CustomerService) { }

  async ngOnInit() { 
    // this.getCustomers()
    // this.customerService.customerListModified.subscribe(res => {
    //   this.getCustomers()
    // })  
  }
  // getCustomers(): any{
  //   this.customerService.getCustomers().subscribe(res =>{
  //     this.customers=res
  //   })
  // }

  addCustomers() {
    this.customers=[]
    console.log(this.customerVo)
    this.changeAddBtnState()
    this.customerService.addProducts(this.customerVo)
      .subscribe(res => {
        this.customers.push(this.customerVo)
        Swal.fire({
          title: "You have been registered",
          timer: 1000
        })
        this.customerVo=new CustomerVo()
      },
        (error: any) => {
          console.log(error)
          alert(error.error)
        });
    this.customerVo = new CustomerVo();
  }
  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }
  }
