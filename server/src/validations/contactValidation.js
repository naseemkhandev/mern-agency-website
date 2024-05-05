import { z } from 'zod';

export const contactSchema = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email address' })
    .max(16, 'Email must be at most 16 characters')
    .min(5, 'Email must be at least 5 characters'),

  subject: z
    .string({ required_error: 'Subject is required' })
    .min(3, 'Subject must be at least 3 characters')
    .max(20, 'Subject must be at most 20 characters')
    .trim(),

  message: z
    .string({ required_error: 'Message is required' })
    .min(20, 'Message must be at least 20 characters')
    .max(250, 'Subject must be at most 250 characters')
    .trim(),
});
