
import express from 'express'
import  {placeOrder,placeOrderStrip,placeOrderRazorpay,allOrders, userOrders, updateStatus}  from '../controllers/orderController.js'; // Path to where your handlers are located
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'


const orderRouter = express.Router()
// Admin Features
orderRouter.post('list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// payment Features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStrip)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// user Feature

orderRouter.post('/userorders', authUser,userOrders)
export default orderRouter