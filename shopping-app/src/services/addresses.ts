import {randomBytes} from 'crypto'
import { Identifier } from 'sequelize/types'
import { Address } from '../db/models/address'
import { NotFoundError } from '../middlewares/errors'

const addresses = [
  // {
  //   id:123,
  //   "address": "john.q.public@example.com",
  // },
  // {
  //   id:234,
  //   "address": "mary@example.net",
  // },
]


export const getAddress = async () => {
  return Address.findAll()
}

export const getAddressById = async (id: Identifier) => {
  return Address.findByPk(id)
}


// //create new addres 
export const createAddress = async (newAddress: string ) => {
  const addr= await Address.findOne({
    where: {
    address: newAddress
    }
  })
  if (addr) { throw new Error('Address already exist!') }
  const a = new Address();
  a.address = newAddress,
  a.id = randomBytes(12).toString('hex');

  return a.save()

}

export const updateAddress = async (newAddress: string) => {
  const addr = await Address.findOne({
    where: {
      address: newAddress
    }
  })
  if (!addr) {
    throw new NotFoundError('Address not found')
  }
  newAddress && addr.set('address', newAddress)
  return (addr.save())
}
