import { z } from 'zod';

export const registerSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters')
    .trim()
    .regex(
      /^[a-zA-Z0-9_]*$/,
      'Username must contain only letters, numbers, and underscores',
    ),

  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email address' })
    .max(16, 'Email must be at most 16 characters')
    .min(5, 'Email must be at least 5 characters'),

  phone: z
    .string({ required_error: 'Phone is required' })
    .trim()
    .regex(/^[0-9]*$/, 'Phone must contain only numbers')
    .min(11, 'Phone must be at least 11 characters')
    .max(11, 'Phone must be at most 11 characters'),

  password: z
    .string({ required_error: 'Password is required' })
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be at most 16 characters'),
});
