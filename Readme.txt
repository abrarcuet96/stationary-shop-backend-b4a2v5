Project Name: Stationery Shop B4A2V5, 
Live Deployment Link: https://stationary-shop-backend-six.vercel.app/
GitHub Link:
Video Explanation (Public Link):
________________________________________________________________________

Project Setup Explanation:
1. Initialized nodejs project.
2. Installed the packages(express, mongoose, dotenv, cors, nodemon).
3. Initialized Typescript and editted tsconfig.json file.
4. Created .env file and added NODE_ENV, PORT & DATABASE_URL.
5. Created folder structure for moduler system,.
6. Setup eslint and prettier.
7. Added scripts into package.json.

Project Diong Explanation:
1. At first created the files for two "modules" orders & "products".
2. Then for both files I have made interface-> schema-> service->controller->routes.
3. validated the models using zod but later on I have used custor error handler.

Features:
# Product handling:
1. Creating Product.
2. Updating Product.
3. Getting all products.
4. Getting single product.
5. Deleting a product.
# Order handling:
1. Creating order.
2. Updating order.
3. Getting all orders.
4. Getting single order.
5. Deleting a order.
# Functionality:
1. Reducing quantity from products data while an order is placed.
2. Calculating the total revenue.

Technology Used: node, express, mongoose, zod, typescript.

