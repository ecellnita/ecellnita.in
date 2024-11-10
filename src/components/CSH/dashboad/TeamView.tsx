'use client';

import React, { FormEvent, useState } from 'react';
import ReactDOM from 'react-dom';

import { type TeamWithPasswordHash, submitIdea } from '~/lib/actions';

import { File, Users } from 'lucide-react';

import { Label } from '~/components/ui/label';
import { Button } from '~/components/ui/button';
import uploadPDF from '~/lib/uploader';

const problemStatements: string[] = [
  'Cyber Security Hackathon',
  'Innovation for Clean Homes and Cities',
  'Low-Water Use Public Toilets with Digital Monitoring and Control Systems',
  '“May I Help You” Robot Design',
  'Open Innovation Challenge',
];

const subProblemStatements: string[] = [
  'PS-1: Decrypting the Caesar Cipher',
  'PS-2: Examination of a Keystroke Logger',
  'PS-3: Network Packet Sniffing and Protection',
  'PS-4: Developing Defenses Against SQL Injection',
];

export interface IdeaDataInterface {
  problemStatement: string;
  subProblemStatement: string;
  fileURL: string;
}

function TeamView(teamDetails: TeamWithPasswordHash, { ideaDetails }) {
  const [isIdeaSubmitted, setIsIdeaSubmitted] = useState<boolean>(false);
  const [ideaData, setIdeaData] = useState<IdeaDataInterface>({
    problemStatement: '',
    subProblemStatement: '',
    fileURL: ''
  });
  const [ideaFile, setIdeaFile] = useState<File>();

  const onSubmitIdea = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const teamId = localStorage.getItem('csh_team_id');
    if (!teamId) {
      console.log('team id not found, login again');
      return;
    }


    const formData = new FormData();
    if(!ideaFile) return console.log("file not provided");

    formData.append('file', ideaFile);

    const fileUploadRes = await uploadPDF('csh-ecell', formData, teamId);
    const fileUploadResponse = JSON.parse(fileUploadRes);

    console.log("fileUploadResponse: ", fileUploadResponse);

    if(fileUploadResponse.success){
      setIdeaData({ ...ideaData, fileURL: fileUploadResponse.url });

      const res = await submitIdea(teamId, ideaData);

      const response = JSON.parse(res);
      if (response.success) {
        console.log('Idea submitted successfully');
        setIsIdeaSubmitted(true);
      } else {
        console.log('Can not submit idea: ', response.error);
      }
    }else{
      console.log("Can not upload file: ", fileUploadResponse.error);
    }
  };

  return (
    <>
      <div className='z-40 md:mt-20 flex w-full md:w-[85%] flex-col p-8'>
        <div className='flex items-center justify-between rounded-xl bg-[#0c0c29] p-8'>
          <div>
            <h1 className='text-xl md:text-4xl font-bold text-white'>
              Team: {teamDetails && teamDetails.teamName}
            </h1>
            <p className='mt-4'>
              Team Leader: {teamDetails && teamDetails.leader.name}
            </p>
          </div>
          <div className='flex flex-col items-center justify-between'>
            <span className='flex items-center justify-between'>
              <span className='mr-4 text-lg md:text-xl'>
                {teamDetails && teamDetails.members.length + 1}
              </span>
              <Users />
            </span>
            <span className='mt-4'>
              {
                !ideaDetails && <span className='rounded-2xl bg-red-500 px-3 py-1 text-sm text-white'>
                                  not submitted
                                </span>
              }
              {
                ideaDetails && <span className='rounded-2xl bg-green-500 px-3 py-1 text-sm text-white'>
                                  submitted
                                </span>
              }
            </span>
          </div>
        </div>

        <div className={`my-10 flex ${isIdeaSubmitted? 'h-[40svh]' : 'h-[70svh]'} flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-600 bg-[#0c0c29] p-8`}>
          {
            !isIdeaSubmitted &&
            <form
              onSubmit={onSubmitIdea}
              className='flex w-full md:w-[50%] flex-col items-center justify-center'
            >
              <p className='my-4 text-xl font-semibold text-gray-400 text-center'>
                Submit your video and presentation here
              </p>
              <div className='my-2 flex w-full flex-col items-start justify-between'>
                <Label
                  htmlFor='problemStatement'
                  className='my-2 text-[1rem] font-semibold'
                >
                  Choose Your Problem Statement
                </Label>
                <select
                  name='problemStatement'
                  id='problemStatement'
                  className='w-full rounded-md border-2 border-white/90 bg-[#0c0c29] px-4 py-2'
                  value={ideaData.problemStatement}
                  onChange={(e) =>
                    setIdeaData({ ...ideaData, problemStatement: e.target.value })
                  }
                  required
                >
                  <option className='bg-[#0c0c29]'>
                    Choose Problem Satement
                  </option>
                  {problemStatements.map((problemStatement, index) => {
                    return (
                      <option
                        key={index}
                        value={problemStatement}
                        className='bg-[#0c0c29]'
                      >
                        {problemStatement}
                      </option>
                    );
                  })}
                </select>
              </div>
              {ideaData.problemStatement === 'Cyber Security Hackathon' && (
                <div className='flex w-full flex-col items-start justify-between'>
                  <Label
                    htmlFor='problemSubStatement'
                    className='my-2 text-[1rem] font-semibold'
                  >
                    Choose Your Sub Problem Statement
                  </Label>
                  <select
                    name='problemSubStatement'
                    id='problemSubStatement'
                    className='w-full rounded-md border-2 border-white/90 bg-[#0c0c29] px-4 py-2'
                    value={ideaData.subProblemStatement}
                    onChange={(e) =>
                      setIdeaData({
                        ...ideaData,
                        subProblemStatement: e.target.value,
                      })
                    }
                    required
                  >
                    <option className='bg-[#0c0c29]'>
                      Choose Sub Problem Satement
                    </option>
                    {subProblemStatements.map((subProblemStatement, index) => {
                      return (
                        <option
                          key={index}
                          value={subProblemStatement}
                          className='bg-[#0c0c29]'
                        >
                          {subProblemStatement}
                        </option>
                      );
                    })}
                  </select>
                </div>
              )}
              <div className='my-4 flex w-full flex-col items-start justify-between'>
                <Label
                  htmlFor='ppt'
                  className='my-2 flex h-[10svh] w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-white/95 text-[1rem] font-semibold'
                >
                  {
                    !ideaFile && <p>Choose PPT</p>
                  }
                  {
                    ideaFile &&  <span className='flex'>
                                        <File className='mr-2'/>
                                        {ideaFile.name}
                                      </span>
                  }
                </Label>
                <input
                  onChange={(e) =>
                    setIdeaFile(e.target.files[0])
                  }
                  type='file'
                  id='ppt'
                  accept='application/pdf'
                  hidden
                  required
                />
              </div>
              <Button className='flex w-full cursor-pointer items-center justify-center rounded-xl bg-white px-4 py-2 font-semibold text-gray-800'>
                Submit
              </Button>
            </form>
          }

          {
            isIdeaSubmitted &&
            <p className='text-white/85 text-lg font-semibold'>Idea Submitted</p>
          }
        </div>
      </div>
    </>
  );
}

export default TeamView;
