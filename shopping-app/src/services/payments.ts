import path from "path"

export const addMoney = (cash) => {

  let userAccount = {
    valid: true,
    money: cash
  }

  return ("dodano " + userAccount.money + "pln")
}

