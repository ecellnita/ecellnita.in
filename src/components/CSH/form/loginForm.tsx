"use client"

import React from 'react';
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

interface CreateTeamResponse {
	id: string;
	teamName: string;
	createdAt: Date;
	updatedAt: Date;
}
export type Team = z.infer<typeof LoginTeamSchema>;

export type FlattenObjects<T> = T extends object
	? T extends infer O
		? { [K in keyof O]: FlattenObjects<O[K]> }
		: never
	: T;

function LoginForm() {
    const form = useForm<Team>({
		resolver: zodResolver(LoginTeamSchema)
	});

    const onSubmit: SubmitHandler<Team> = async (
		values: z.infer<typeof LoginTeamSchema>
	) => {
		try {
			// console.log(values);
			const res = await fetch('/api/create', {
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
			} else if (res.id) {
				toast.success('Team created successfully');
				form.reset({
					teamname: '',
					password: ''
				});
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

  return (
    <div>
        <Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-3'>
				<FormField
					control={form.control}
					name='teamname'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='text-white'>Team Name</FormLabel>
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
			</form>
		</Form>
    </div>
  )
}

export default LoginForm