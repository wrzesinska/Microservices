import path from "path"
import {randomBytes} from 'crypto'

const coupons = [ 
    { 
        id : 15012, discount : 0.2,
    },
    { 
        id : 15045, discount : 0.5,
    }
] 

export const getCoupons = () => {
    return Promise.resolve(coupons)
}

export const getCouponById = (coupon_id) => {
    return (coupons.find(a => a.id == coupon_id))
}

export const createCoupon = async (newCoupon) => {
    newCoupon.id = randomBytes(12).toString('hex')
    coupons.push(newCoupon)
  
    return (newCoupon)
  }