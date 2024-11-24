import { Model } from 'mongoose';

interface IProduct {
  name: string;
  brand: string;
  price: number;
  category:
    | 'Writing'
    | 'Office Supplies'
    | 'Art Supplies'
    | 'Educational'
    | 'Technology';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt?: string;
  updatedAt?: string;
}

// creating custom static method:
export interface ProductModel extends Model<IProduct> {
  isProductExists(name: string): Promise<IProduct | null>;
  reduceQuantity(
    productId: string,
    orderQuantity: number,
  ): Promise<IProduct | null>;
}
export default IProduct;
