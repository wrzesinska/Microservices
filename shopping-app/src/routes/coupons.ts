import * as express from 'express'
import * as couponService from '../services/coupons'
import { body, validationResult } from 'express-validator'

export const couponRoutes = express.Router()

// add new coupon

couponRoutes.get('/', async (req, res) => {
    const result = await couponService.getCouponById(req.params.id)
    res.json(result)
  })
  
couponRoutes.post('/newCoupon', async (req, res) => {
    const couponID = req.body['id']
    const couponDiscount = req.body['discount']
    res.send(await couponService.createCoupon(couponID, couponDiscount))
  })
  
couponRoutes.get('/:coupon-id', async (req, res) => {
    const coupon_id = req.params['coupon_id']
  
    res.send(couponService.getCouponById(coupon_id))
  })