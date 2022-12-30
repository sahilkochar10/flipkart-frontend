export interface Order{
    orderID: number
    date: Date
    orderDetails: any
    customer: any
    shipper: any
    
    }

export interface OrderVo {
    date: string
    orderDetails: OrderDetails[]
    customerID: number
    shipperID: number
}

export interface OrderDetails{
    productID: number
    quantity: number
}