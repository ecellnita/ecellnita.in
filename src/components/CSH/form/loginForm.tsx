"use client"

import React, { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import {
	useForm,
	useFieldArray,
	type SubmitHandler,
	type SubmitErrorHandler,
	type FieldErrors,
} from 'react-hook-form';
import type * as z from 'zod';

// Components
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '~/components/ui/form'

import { LoginTeamSchema } from '~/lib/zod';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface CreateTeamResponse {
	message: string;
	teamId: string;
}
export type Team = z.infer<typeof LoginTeamSchema>;

export type FlattenObjects<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: FlattenObjects<O[K]> }
		: never
	: T;

function LoginForm() {
	const router = useRouter();

    const form = useForm<Team>({
		resolver: zodResolver(LoginTeamSchema)
	});

    const onSubmit: SubmitHandler<Team> = async (
		values: z.infer<typeof LoginTeamSchema>
	) => {
		try {
			// console.log(values);
			const res = await fetch(`${process.env.API_URL}/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(values),
			}).then(
				async (res) => (await res.json()) as CreateTeamResponse | { error: string }
			);
			if ('error' in res) {
				throw new Error(res.error);
			} else if (res.teamId) {
				toast.success('Team created successfully');
				localStorage.setItem('csh_team_id', res.teamId);
				form.reset({
					teamId: '',
					password: ''
				});
				router.push('dashboard/view');
			}
		} catch (error) {
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


	const logout = () => {
		localStorage.removeItem('csh_team_id');
	}

	useEffect(()=>{
		logout();
	}, []);
  return (
    <div>
        <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-3'>
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
				<span className='text-white flex justify-center items-center'>Have not registered yet? <Link href='registration' className='text-white underline mx-2 cursor-pointer'>Register now</Link></span>
			</form>
		</Form>
    </div>
  )
}

export default LoginForm