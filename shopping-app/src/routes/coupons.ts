import * as express from 'express'
import * as couponService from '../services/coupons'

export const couponRoutes = express.Router()

couponRoutes.get('/', async (req, res) => {
    const coupon = couponService.getCoupons()
    res.send(coupon)
  })
  
  couponRoutes.get('/:coupon-id', async (req, res) => {
    const coupon_id = req.params['coupon_id']
  
    res.send(couponService.getCouponById(coupon_id))
  })