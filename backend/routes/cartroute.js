
import express from 'express'
import {addToCart,getUserCart, updateCart } from "../controllers/cartController.js"
const cartRouter = express.Router()
import authuser from '../middleware/auth.js'

cartRouter.post('/get,authUser, getUserCart')
cartRouter.post('/add, authUser, addToCart')
cartRouter.post('/update, authUser, updateCart')

export default cartRouter