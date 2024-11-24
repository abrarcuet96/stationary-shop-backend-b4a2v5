import IOrder from './orders.interface';
import { Order } from './orders.model';

const createOrder = async (payload: IOrder) => {
  const result = await Order.create(payload);
  return result;
};
const getOrders = async () => {
  const result = await Order.find();
  return result;
};
const getSingleOrder = async (id: string) => {
  const result = await Order.findById(id);
  return result;
};

// Calculating the revenue using aggreagtion:
// revenue= {{quantity*totalPrice}...}
// totalRevenue= {revenue+revenue...}
const getRevenue = async () => {
  const result = await Order.aggregate([
    {
      $project: {
        revenue: { $multiply: ['$quantity', '$totalPrice'] },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$revenue' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  return result;
};
const updateOrder = async (id: string, payload: IOrder) => {
  const result = await Order.findByIdAndUpdate(id, payload);
  return result;
};
const deleteOrder = async (id: string) => {
  const result = await Order.findByIdAndDelete(id);
  return result;
};

export const OrderServices = {
  createOrder,
  getOrders,
  getSingleOrder,
  updateOrder,
  deleteOrder,
  getRevenue,
};
