'use client';

import React from 'react';
import {
  type FieldErrors,
  type SubmitErrorHandler,
  useFieldArray,
  useForm,
} from 'react-hook-form';

import { editTeam } from '~/lib/actions';
import { TeamUpdateSchema } from '~/lib/zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoaderCircle, Trash2 } from 'lucide-react';
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

export type TeamUpdateType = z.infer<typeof TeamUpdateSchema>;

export type FlattenObjects<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: FlattenObjects<O[K]> }
    : never
  : T;

const EditTeamForm = () => {
  const form = useForm<TeamUpdateType>({
    resolver: zodResolver(TeamUpdateSchema),
    defaultValues: {
      teamName: '',
      leader: {
        name: '',
        email: '',
        contact: '',
      },
      members: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'members',
  });

  const onAddMember = () => {
    if (fields.length >= 4) {
      toast.error(
        'A team can have maximum of 5 members including the team leader'
      );
      return;
    }
    append({
      name: '',
      email: '',
      contact: '',
    });
  };

  const onSubmit = async (values: z.infer<typeof TeamUpdateSchema>) => {
    try {
      const teamId = localStorage.getItem('csh_team_id');
      if (!teamId) return;
      console.log(teamId);
      const res = await editTeam(teamId, values);
      if (!res.success) {
        toast.error('Could not edit team');
      }

      toast.success('Team updated successfully');
      form.reset({
        teamName: '',
        leader: {
          name: '',
          email: '',
          contact: '',
        },
        members: [],
      });
    } catch (error) {
      toast.error(String(error));
    }
  };

  function collectErrors(obj: FieldErrors<TeamUpdateType>): string[] {
    const errors: string[] = [];
    const processObject = (nestedObj: FieldErrors<TeamUpdateType>) => {
      for (const key in nestedObj) {
        if (nestedObj.hasOwnProperty(key)) {
          const value = nestedObj[key as keyof TeamUpdateType];
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

  const onError: SubmitErrorHandler<TeamUpdateType> = (errors) => {
    console.log(errors);
    const errorMessages = collectErrors(errors);
    errorMessages.forEach((err) => {
      toast.error(err);
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className='z-[100000] w-[50%] space-y-3'
      >
        <FormField
          control={form.control}
          name='teamName'
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
        <div className='pt-6 text-lg text-white'>Team Leader Details</div>
        <FormField
          control={form.control}
          name='leader.name'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='John Doe'
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
          name='leader.email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>E-mail</FormLabel>
              <FormControl>
                <Input
                  placeholder='john.doe@gmail.com'
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
          name='leader.contact'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-white'>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder='8973518316'
                  {...field}
                  disabled={form.formState.isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {fields.map((item, index) => (
          <React.Fragment key={index}>
            <div className='flex flex-row items-center gap-2 pt-6'>
              <div className='text-lg text-white'>Team Member {index + 1}</div>
              <Button
                size='icon'
                onClick={() => remove(index)}
                variant='ghost'
                className='hover:bg-[#0A0A0A]'
                disabled={form.formState.isSubmitting}
              >
                <Trash2 className='text-neutral-300' />
              </Button>
            </div>

            <FormField
              control={form.control}
              name={`members.${index}.name`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Team member ${index + 1} name`}
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
              name={`members.${index}.email`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`member${index + 1}@gmail.com`}
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
              name={`members.${index}.contact`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={`Team member ${index + 1} Phone`}
                      {...field}
                      disabled={form.formState.isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </React.Fragment>
        ))}
        <Button
          variant='outline'
          className='w-full bg-[#0A0A0A] text-white hover:bg-[#0A0A0A] hover:text-white'
          type='button'
          onClick={onAddMember}
          disabled={form.formState.isSubmitting}
        >
          Add Team Member
        </Button>

        <div className='z-[100000] flex justify-center py-12'>
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
  );
};

export default EditTeamForm;
