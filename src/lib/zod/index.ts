import { z } from 'zod';

const nameRegex = /^[a-zA-Z\s]+$/;
const phoneNumberRegex = /^\d{10}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const TeamMemberSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .refine((value) => nameRegex.test(value), {
      message: 'Invalid name format (only alphabets and spaces allowed)',
    }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .refine((value) => emailRegex.test(value), {
      message: 'Invalid email format',
    }),
  contact: z
    .string({
      required_error: 'Phone number is required',
    })
    .refine((value) => phoneNumberRegex.test(value), {
      message: 'Invalid phone number',
    }),
});

const TeamLeaderSchema = TeamMemberSchema.extend({
  password: z
    .string({
      required_error: 'Team password is required',
    })
    .min(8, 'Password must be 8 characters long'),
});

export const TeamSchema = z.object({
  teamName: z
    .string({
      required_error: 'Team name is required',
    })
    .max(50, { message: 'Team Name must be atmost 50 characters long' }),
  leader: TeamLeaderSchema,
  members: z
    .array(TeamMemberSchema)
    .refine((data) => data.length >= 2 && data.length <= 4, {
      message:
        'A team must have between 3 and 5 members, including the team leader.',
    }),
});

export const LoginTeamSchema = z.object({
  teamId: z
    .string({
      required_error: 'Team name is required',
    })
    .max(50, { message: 'Team Name must be atmost 50 characters long' }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(8, { message: 'Password must be 8 characters long' }),
});
