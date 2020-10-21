import {randomBytes} from 'crypto'

const addresses = [
  {
    id:123,
    "address": "john.q.public@example.com",
  },
  {
    id:234,
    "address": "mary@example.net",
  },
]


export const getAddress = async () => {
  return (addresses)
}

export const getAddressById = async (id) => {
  return (addresses.find(a => a.id == id))
}


// //create new addres 
export const createAddress = async (newAddress) => {
  newAddress.id = randomBytes(12).toString('hex')
  addresses.push(newAddress)

  return (newAddress)
}
