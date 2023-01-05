export interface Product{
    productID : number
    productName : string
    unit : number
    price : number
    supplierID : number
    addBtnState : boolean
    productImage: string
}

export class ProductVo implements Product{
    addBtnState: boolean = false
    productID: number
    productName: string
    unit: number
    price: number
    supplierID: number
    productImage: string
}