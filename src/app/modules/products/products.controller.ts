import { NextFunction, Request, Response } from 'express';
import { ProductServices } from './products.service';

const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const product = req.body;
    const result = await ProductServices.createProduct(product);

    res.status(200).json({
      success: true,
      message: 'Product is created successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await ProductServices.getProducts();

    res.status(200).json({
      success: true,
      message: 'Products are retrieved successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const getSingleProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: result
        ? 'Product is retrieved successfully'
        : 'Product is not available',
      result,
    });
  } catch (error) {
    next(error);
  }
};
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    const { quantity } = product;
    if (quantity < 0) {
      throw new Error('Quantity can not be negative');
    }
    product.updatedAt = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Dhaka',
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    const result = await ProductServices.updateProduct(productId, product);
    res.status(200).json({
      success: true,
      message: 'Product is updated successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProduct(productId);
    res.status(200).json({
      success: true,
      message: 'Product is deleted successfully',
      result,
    });
  } catch (error) {
    next(error);
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
