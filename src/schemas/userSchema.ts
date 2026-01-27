import * as z from 'zod';
export const userRegistrationSchema = z.object({
  name: z.string().min(3, { message: 'Name is required' }),
  email: z.email({ message: 'Invalid email address' }),
  password: z.string().min(8, { message: 'Password must be at least 8 characters long' }),
});

export const userLoginSchema = userRegistrationSchema.pick({
  email: true,
  password: true,
});
