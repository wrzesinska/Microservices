import path from "path"

const coupon1 = {
	id : 15012,
	discount : 0.2,
  }

export const getCoupons = () => {

    return [coupon1]
}

export const getCouponById = (coupon_id) => {

    return coupon1
}