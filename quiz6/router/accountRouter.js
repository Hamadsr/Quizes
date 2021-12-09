const express = require("express");
const express = require("express");
const userRouter = express.Router()

const {getAcount}= require("../controler/account")


userRouter.get("/account", getAcount)