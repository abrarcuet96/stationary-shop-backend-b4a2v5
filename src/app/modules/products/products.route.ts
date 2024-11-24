import express from 'express';
import { ProductControllers } from './products.controller';
const productRouter = express.Router();

productRouter.post('/', ProductControllers.createProduct);
productRouter.get('/:productId', ProductControllers.getSingleProduct);
productRouter.get('/', ProductControllers.getProducts);
productRouter.put('/:productId', ProductControllers.updateProduct);
productRouter.delete('/:productId', ProductControllers.deleteProduct);

export const ProductRoutes = productRouter;
