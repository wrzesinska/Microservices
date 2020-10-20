
export const getAddress = (filter) => {

    const addresses = require('../../data/addresses-list.json')
  
    return (addresses.filter(p => p.address.includes(filter)))
  }