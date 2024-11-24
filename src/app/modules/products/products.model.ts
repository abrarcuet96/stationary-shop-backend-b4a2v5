import { model, Schema } from 'mongoose';
import IProduct, { ProductModel } from './products.interface';
import { ProductServices } from './products.service';

const productSchema = new Schema<IProduct, ProductModel>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
  },
  brand: {
    type: String,
    required: [true, 'Brand name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: String,
    enum: {
      values: [
        'Writing',
        'Office Supplies',
        'Art Supplies',
        'Educational',
        'Technology',
      ],
      message:
        "Valid categories are: 'Writing', 'Office Supplies', 'Art Supplies', 'Educational', or 'Technology'",
    },
    required: [true, 'Category name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    minlength: [10, 'Description must be at least 10 characters long'],
    maxlength: [100, 'Description must not exceed 100 characters'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
    min: [0, 'Quantity must be a non-negative integer'],
    validate: {
      validator: Number.isInteger,
      message: 'Quantity must be an integer',
    },
  },
  inStock: {
    type: Boolean,
    required: [true, 'In-stock status is required'],
  },
  createdAt: String,
  updatedAt: String,
});
// Custom static methods:
// Find if the product existed:
productSchema.statics.isProductExists = async function (name: string) {
  const existingProduct = await Product.findOne({ name });
  return existingProduct;
};
// Reduce the quantity when an order is placed:
productSchema.statics.reduceQuantity = async function (
  productId,
  orderQuantity,
) {
  const product = await this.findById(productId);
  if (!product) {
    throw new Error('Product not found');
  }
  // Reduce the quantity
  product.quantity -= orderQuantity;
  product.inStock = product.quantity === 0 ? false : true;
  if (product.quantity >= 0) {
    await ProductServices.updateProduct(productId, product);
  } else {
    throw new Error('No products available');
  }
};
// Hook for setting the create and update field:
productSchema.pre('save', function (next) {
  const createdAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Dhaka',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  this.createdAt = createdAt;
  this.updatedAt = createdAt;
  next();
});
export const Product = model<IProduct, ProductModel>('Product', productSchema);
