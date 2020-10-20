import * as express from 'express'
import * as couponService from '../services/coupons'
import { body, validationResult } from 'express-validator'

export const couponRoutes = express.Router()

// add new coupon

// couponRoutes.get('/', async (req, res) => {
//     const result = await couponService.getCouponById(req.params.id)
//     res.json(result)
//   })
  
// couponRoutes.post('/', [
//     body('email').isEmail(),
//   ], async (req, res) => {
//     const createCoupon = req.body
//     const newCoupon = await couponService.createCoupon(createCoupon)
//     res.status(201).send({ ok: true, newCoupon})
//   })
  
// couponRoutes.get('/:coupon-id', async (req, res) => {
//     const coupon_id = req.params['coupon_id']
  
//     res.send(couponService.getCouponById(coupon_id))
//   })

couponRoutes.get('/', async (req, res) => {
    const coupon = couponService.getCoupons()
    res.send(coupon)
  })
  
  couponRoutes.get('/:coupon-id', async (req, res) => {
    const coupon_id = req.params['coupon_id']
  
    res.send(couponService.getCouponById(coupon_id))
  })