import path from "path"

// const payments = [
//   {id:13, userId:123, amount:100, status:'pending'}
// ]

let userAccount = {
  valid: true,
  money: 0
}

export const addMoney = (cash) => {
  userAccount.money += cash
  return ("dodano " + userAccount.money + "pln")
}

