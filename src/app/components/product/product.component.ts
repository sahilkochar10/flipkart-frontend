import { Component, OnInit } from '@angular/core';
import { Product, ProductVo } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: ProductVo[];
  addBtnState: boolean = false;
  editBtnState: boolean = false;
  range: number = 0;
  productVo: ProductVo = new ProductVo();
  cartList : Product[]
  

  constructor(private productService: ProductsService) {

  }

  async ngOnInit() {
    this.getProducts()
    this.productService.productListModified.subscribe(res => {
      this.getProducts()
    })  
  }

  getProducts() : any{
    this.productService.getProducts()
      .subscribe(res => {
        this.products = []
        res.forEach(p => {
          p.addBtnState = false
          this.products.push(p)
        })
        this.cartList = this.productService.cartList
        // this.checkCartBtnState()
        console.log(this.products)
      })
      
      
  }

  addProducts() {
    console.log(this.productVo)
    this.changeAddBtnState()
    this.productService.addProducts(this.productVo)
      .subscribe(res => {
        alert('Product has been added')
      },
        (error: any) => {
          console.log(error)
          alert(error.error)
        });
    this.productVo = new ProductVo();
  }

  // checkCartBtnState(){
  //   for(let i=0; i<this.products.length; i++){
  //     if(this.productService.cartListSet.has(this.products[i].productID)){
  //       this.products[i].addBtnState = true;
  //     }
  //   }
  // }

  changeAddBtnState() {
    this.addBtnState = !this.addBtnState
  }
  
  changeEditBtnState(){
    this.editBtnState = !this.editBtnState
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id)
      .subscribe(res => {
        alert('Product has been deleted')
      })
  }

  editProduct() {
    console.log(this.productVo)
    this.changeEditBtnState()
    this.productService.editProduct(this.productVo)
    .subscribe(res => {
      alert('Product Modified')
    })
    this.productVo = new ProductVo()
  }

  setEditProductId(product){
    this.productVo = product
    this.changeEditBtnState()
    // this.productVo.productID = product.productId
    // this.productVo.supplierID = product.supplierId
  }

  addToCart(product: Product, i){
    this.productService.cartList.push(product)
    this.productService.addCartList(product.productID)
    this.products[i].addBtnState = true
    console.log(this.products[i])
    // console.log(this.productService.cartListSet)
  }

  checkBtnState(productID){
    return this.productService.checkBtnState(productID)
  }

}
