import path from "path"
import { getUserById } from "./users";

let userAccount = {
  valid: true,
  money: 0
}

const payments = [];

export const addMoney = (cash) => {
  userAccount.money += cash
  return ("dodano " + userAccount.money + "pln")
}

export const createPayment = (userID, productID, value) => {
  let newPayment = {
    userId: userID,
    paymentID: Date.now().toString(),
    product: productID,
    orderValue: value,
    status: 'new'
  }
  payments.push(newPayment)
}

export const getPaymentStatus = (paymentID) => {
  let orderSelection = payments.filter(item => {
    return item.paymentID === paymentID
  });

  return orderSelection[0].status;
}

export const changeStatus = (paymentID) => {
  const index = payments.indexOf(element => element.paymentID = paymentID);
  payments[index].status = 'pending'
}
