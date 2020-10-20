import path from "path"
import { getUserById } from "./users";

// const payments = [
//   {id:13, userId:123, amount:100, status:'pending'}
// ]

let userAccount = {
  valid: true,
  money: 0
}

type PaymentStatus = 'pending' | 'success' | 'failed';

interface Payment {
  userId: string;
  paymentID: string;
  product: string;
  orderValue: string;
  status: PaymentStatus;
}

const payments: Payment[] = [];

export const addMoney = (cash) => {
  userAccount.money += cash
  return ("dodano " + userAccount.money + "pln")
}

export const createPayment = async (userID, productID, value) => {
  let newPayment: Payment = {
    userId: userID,
    paymentID: Date.now().toString(),
    product: productID,
    orderValue: value,
    status: 'pending'
  }
  payments.push(newPayment)
  return newPayment
}

export const getPaymentStatus = async (paymentID) => {
  let orderSelection = payments.filter(item => {
    return item.paymentID === paymentID
  });

  return orderSelection[0].status;
}

export const getPayment = async (paymentID) => {
  let orderSelection = payments.filter(item => {
    return item.paymentID === paymentID
  });

  return orderSelection[0];
}


export const changeStatus = (paymentID, status: PaymentStatus = 'pending') => {
  const index = payments.findIndex(element => element.paymentID == paymentID);
  payments[index].status = status
  return payments[index]
}
