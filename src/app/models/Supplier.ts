export interface Supplier{
    supplierID: number,
    address: string,
    city: string,
    postalCode: number,
    supplierName: string
    addBtnState : boolean
}

export class SupplierVo{
    supplierID: number
    address: string
    city: string
    postalCode: number
    supplierName: string
    addBtnState: boolean = false
}