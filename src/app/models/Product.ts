export interface Product{
    productID : number
    productName : string
    unit : number
    price : number
    supplierID : number
    addBtnState : boolean
}

export class ProductVo implements Product{
    addBtnState: boolean = false
    productID: number
    productName: string
    unit: number
    price: number
    supplierID: number
}