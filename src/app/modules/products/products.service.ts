import IProduct from './products.interface';
import { Product } from './products.model';

const createProduct = async (payload: IProduct) => {
  if (await Product.isProductExists(payload.name)) {
    throw new Error('Product already exists');
  }

  const result = await Product.create(payload);
  return result;
};
const getProducts = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateProduct = async (id: string, payload: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, payload);
  return result;
};
const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};
export const ProductServices = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
