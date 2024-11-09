'use client';

import React from 'react';
import {
  type FieldErrors,
  type SubmitErrorHandler,
  type SubmitHandler,
  useForm,
} from 'react-hook-form';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { login } from '~/lib/actions';
import { LoginTeamSchema } from '~/lib/zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import type * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/components/ui/form';

// Components
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';

export type Team = z.infer<typeof LoginTeamSchema>;

export type FlattenObjects<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: FlattenObjects<O[K]> }
    : never
  : T;

function LoginForm() {
  const router = useRouter();

  const form = useForm<Team>({
    resolver: zodResolver(LoginTeamSchema),
  });

  const onSubmit: SubmitHandler<Team> = async (
    values: z.infer<typeof LoginTeamSchema>
  ) => {
    try {
      const res = await login(values.teamId, values.password);
      toast.success('Logged in successfully');
      localStorage.setItem('csh_team_id', res.teamId);
      form.reset({
        teamId: '',
        password: '',
      });
      router.push('dashboard/view');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'An error occurred');
      toast.error(String(error));
    }
  };

  function collectErrors(obj: FieldErrors<Team>): string[] {
    const errors: string[] = [];
    const processObject = (nestedObj: FieldErrors<Team>) => {
      for (const key in nestedObj) {
        if (nestedObj.hasOwnProperty(key)) {
          const value = nestedObj[key as keyof Team];
          if (typeof value === 'object' && value !== null) {
            processObject(value);
          } else if (key === 'message' && typeof value === 'string') {
            errors.push(value);
          }
        }
      }
    };
    processObject(obj);
    return errors;
  }

  const onError: SubmitErrorHandler<Team> = (errors) => {
    const errorMessages = collectErrors(errors);
    errorMessages.forEach((err) => {
      toast.error(err);
    });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className='space-y-3'
        >
          <FormField
            control={form.control}
            name='teamId'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Team Id</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Case Crackers'
                    {...field}
                    disabled={form.formState.isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-white'>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Password'
                    {...field}
                    disabled={form.formState.isSubmitting}
                    type='password'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex justify-center py-8'>
            <Button
              variant='secondary'
              type='submit'
              className='w-full bg-white text-gray-600'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <LoaderCircle className='animate-spin text-xl' />
              ) : (
                'Submit'
              )}
            </Button>
          </div>
          <span className='flex items-center justify-center text-white'>
            Have not registered yet?{' '}
            <Link
              href='registration'
              className='mx-2 cursor-pointer text-white underline'
            >
              Register now
            </Link>
          </span>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
