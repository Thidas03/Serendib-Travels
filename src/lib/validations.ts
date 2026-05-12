import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify'; // isomorphic-dompurify works on both client and server

// Helper to sanitize strings to prevent basic XSS
const sanitize = (val: string) => DOMPurify.sanitize(val);

export const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
    .transform(sanitize),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(1, 'Confirm Password is required'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const reviewSchema = z.object({
  destinationId: z.string().min(1, 'Destination ID is required'),
  rating: z.number().min(1, 'Rating must be at least 1').max(5, 'Rating cannot exceed 5'),
  comment: z.string()
    .min(10, 'Comment must be at least 10 characters long')
    .max(500, 'Comment is too long (max 500 characters)')
    .transform(sanitize),
});

export const contactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(50, 'Name is too long')
    .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces')
    .transform(sanitize),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(100, 'Subject is too long').transform(sanitize),
  message: z.string().min(20, 'Message must be at least 20 characters').max(1000, 'Message is too long').transform(sanitize),
});

export const newsletterSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

export const searchSchema = z.object({
  query: z.string()
    .max(50, 'Search query is too long')
    .regex(/^[a-zA-Z0-9\s]*$/, 'Special characters are not allowed')
    .transform(sanitize)
    .optional()
    .or(z.literal('')),
});
