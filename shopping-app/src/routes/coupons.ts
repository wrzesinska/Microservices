import * as express from 'express'
import * as couponService from '../services/coupons'
import { body, validationResult } from 'express-validator'
import { validate } from '../middlewares/validate'

export const couponRoutes = express.Router()

// add new coupon

couponRoutes.get('/', async (req, res) => {
  const results = await couponService.getCoupons()
  res.json(results)
})

couponRoutes.post('/', [
  body('name').isString().withMessage('Discount name must be string'),
  body('discount').isDecimal(),//.withMessage('Discount must be between 0 and 1'),
  validate()
],
async (req, res) => {
  const couponDiscount = parseFloat(req.body['discount'])
  const couponName = req.body['name']
  res.send(await couponService.createCoupon(couponName, couponDiscount))
})

couponRoutes.get('/:coupon_id', async (req, res) => {
  const couponId = req.params['coupon_id']

  res.send(await couponService.getCouponById(couponId))
})