import cors from 'cors';
import express, { Application } from 'express';
import errorHandler from './app/errorHandler/error.handler';
import { OrderRoutes } from './app/modules/orders/orders.route';
import { ProductRoutes } from './app/modules/products/products.route';

// Initializing the Express application
const app: Application = express();
app.use(express.json()); // Midleware to parse JSON requests
app.use(cors()); // Enabling Cross-Origin Resource Sharing (CORS)

app.use('/api/products', ProductRoutes); // Setting up the route for products API
app.use('/api/orders', OrderRoutes); // Setting up the route for orders API
app.use(errorHandler); // Adding error handler middleware
export default app;
