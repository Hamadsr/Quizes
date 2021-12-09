const express = require("express");
const userRouter = express.Router()

const {getProduct, addProduct}=require("../controler/product")



userRouter.get("/products",getProduct);

user.post("/add", addProduct)






