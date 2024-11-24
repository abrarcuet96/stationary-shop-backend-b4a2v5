import { NextFunction, Request, Response } from 'express';
import { Product } from '../products/products.model';
import { OrderServices } from './orders.service';

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const { productId, quantity } = order;
    const product = await Product.findById(productId);
    const result = await OrderServices.createOrder(order);
    await Product.reduceQuantity(productId, quantity);
    if (!product) {
      res.status(500).json({ error: 'Product not found' });
    } else if (product.quantity < quantity) {
      res.status(500).json({
        error: `Insufficient product quantity`,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Order is created successfully',
        result,
      });
    }
  } catch (error) {
    next(error);
  }
};
const getOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OrderServices.getOrders();
    res.status(200).json({
      success: true,
      message: 'Orders are retrieved successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleOrder = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.getSingleOrder(orderId);
    res.status(200).json({
      success: true,
      message: 'Order is retrieved successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const getRevenue = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await OrderServices.getRevenue();
    res.status(200).json({
      success: true,
      message: 'Revenue is calculated successfully',
      orders,
    });
  } catch (error) {
    next(error);
  }
};
const updateOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderId } = req.params;
    const order = req.body;
    const result = await OrderServices.updateOrder(orderId, order);
    res.status(200).json({
      success: true,
      message: 'Order is updated successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const deleteOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { orderId } = req.params;
    const result = await OrderServices.deleteOrder(orderId);
    res.status(200).json({
      success: true,
      message: 'Order is deleted successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
export const OrderControllers = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  getRevenue,
};
