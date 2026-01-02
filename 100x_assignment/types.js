import {z} from 'zod';
import { ParseStatus } from 'zod/v3';

export const SignupSchema = z.object({
    name: z.string(),
    email: z.email(),
    password: z.string().min(6),
    role: z.enum(["teacher", "student"])
})

export const LoginSchema = z.object({
    email: z.email(),
    password: z.string()
})