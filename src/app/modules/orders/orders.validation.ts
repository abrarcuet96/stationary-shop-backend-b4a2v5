// import { z } from 'zod';

// const orderValidationSchema = z.object({
//   email: z
//     .string()
//     .min(1, { message: 'Email is required' })
//     .email({ message: 'Invalid email address' })
//     .trim(),
//   productId: z.string().min(1, { message: 'Product ID is required' }).trim(),
//   quantity: z
//     .number()
//     .int({ message: 'Quantity must be an integer' })
//     .min(1, { message: 'Quantity must be at least 1' }),
//   totalPrice: z
//     .number()
//     .min(0, { message: 'Total price must be a non-negative value' }),
// });

// export default orderValidationSchema;
