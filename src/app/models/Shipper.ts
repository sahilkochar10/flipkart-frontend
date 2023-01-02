export interface Shipper{
    shipperID: number,
    phone: number,
    shipperName: string
    addBtnState : boolean
}

export class ShipperVo{
    shipperID: number
    phone: number
    shipperName: string
    addBtnState: boolean = false
}
