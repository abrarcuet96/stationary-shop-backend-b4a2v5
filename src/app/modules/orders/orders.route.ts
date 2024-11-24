import express from 'express';
import { OrderControllers } from './orders.controller';
const orderRouter = express.Router();
orderRouter.get('/revenue', OrderControllers.getRevenue);
orderRouter.post('/', OrderControllers.createOrder);
orderRouter.get('/:orderId', OrderControllers.getSingleOrder);

orderRouter.get('/', OrderControllers.getOrders);
orderRouter.put('/:orderId', OrderControllers.updateOrder);
orderRouter.delete('/:orderId', OrderControllers.deleteOrder);

export const OrderRoutes = orderRouter;
