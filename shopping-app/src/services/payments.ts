import path from "path"

let userAccount = {
  valid: true,
  money: 0
}

export const addMoney = (cash) => {
  userAccount.money += cash
  return ("dodano " + userAccount.money + "pln")
}

