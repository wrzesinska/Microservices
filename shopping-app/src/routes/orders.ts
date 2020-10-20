import * as express from "express";
export const orders = express.Router();

orders.get('/', async (req, res) => {
    const result = {test: "taktak"}

    res.send(result)
})
