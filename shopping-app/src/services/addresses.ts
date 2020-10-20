
const addresses = [  
  {
  "address" : "john.q.public@example.com",
},
{
  "address" : "mary@example.net",
},
]


export const getAddress = () => {
  return Promise.resolve(addresses)
}

  // //create new addres 
  export const createAddress= () => {
    const newAddress = {
      address: "test@test.com",
    }
    addresses.push(newAddress)
  
    return Promise.resolve(newAddress)
  }
