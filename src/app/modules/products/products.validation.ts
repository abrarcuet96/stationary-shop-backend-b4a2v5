// import { z } from 'zod';

// const productValidationSchema = z.object({
//   name: z.string().min(1, { message: 'Product name is required' }),
//   brand: z.string().min(1, { message: 'Brand name is required' }),
//   price: z
//     .number()
//     .positive({ message: 'Product price must be a positive number' }),
//   category: z.enum(
//     ['Writing', 'Office Supplies', 'Art Supplies', 'Educational', 'Technology'],
//     {
//       required_error: 'Product Category is required',
//       invalid_type_error: 'Invalid category!',
//     },
//   ),
//   description: z
//     .string()
//     .min(1, { message: 'Product Description is required' }),
//   quantity: z
//     .number()
//     .int()
//     .nonnegative({ message: 'Quantity must be a non-negative integer' }),
//   inStock: z.boolean({
//     required_error: 'inStock is required',
//     invalid_type_error: 'inStock must be a boolean',
//   }),
//   createdAt: z.string().optional(),
//   updatedAt: z.string().optional(),
// });

// export { productValidationSchema };
