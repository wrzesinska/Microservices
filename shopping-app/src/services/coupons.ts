import path from "path"
import { randomBytes } from 'crypto'
import { Coupon } from "../interfaces/coupons"

const coupons: Coupon[] = [
    {
        id: '15012', name: 'PROMO100', couponDiscount: 0.2,
    },
    {
        id: '15045', name: 'SAVE', couponDiscount: 0.5,
    }
]

export const getCoupons = async () => {
    return (coupons)
}

export const getCouponById = async (coupon_id) => {

    return coupons.find(c => c.id == coupon_id)
}

export const createCoupon = async (couponName: string, couponDiscount: number) => {
    let newCoupon: Coupon = {
        id: randomBytes(12).toString('hex'),
        name: couponName,
        couponDiscount: couponDiscount,
    }
    coupons.push(newCoupon)

    return (newCoupon)
}