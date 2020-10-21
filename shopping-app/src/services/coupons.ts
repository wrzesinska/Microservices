import path from "path"
import {randomBytes} from 'crypto'
import { Coupon } from "../interfaces/coupons"

const coupons:Coupon[] = [ 
    { 
        couponID : 15012, couponDiscount : 0.2,
    },
    { 
        couponID : 15045, couponDiscount : 0.5,
    }
] 

export const getCoupons = () => {
    return Promise.resolve(coupons)
}

export const getCouponById = (coupon_id) => {

    return coupons
}

export const createCoupon = async (couponID, couponDiscount) => {
    let newCoupon: Coupon = {
        couponID: couponID,
        couponDiscount: couponDiscount,
      }
    coupons.push(newCoupon)
  
    return (newCoupon)
  }