import { model, Schema } from 'mongoose';
import IOrder from './orders.interface';

const orderSchema = new Schema<IOrder>({
  email: {
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
});
export const Order = model<IOrder>('Order', orderSchema);
