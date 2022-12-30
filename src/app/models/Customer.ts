export interface Customer{
customerID: number,
postalCode: number,
customerName: string,
address:string,
city:string,
country: string,
addBtnState: boolean

}

export class CustomerVo implements Customer{
    addBtnState: boolean = false
    customerID: number
    postalCode: number
    customerName: string
    address:string
    city:string
    country: string
}