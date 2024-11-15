'use server';

import * as bcrypt from 'bcrypt';
import mongoose, { type Connection } from 'mongoose';
import * as nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid';
import { env } from '~/env';

import { type TeamUpdateType } from '~/components/CSH/form/editform';
import { type Team } from '~/components/CSH/form/registrationForm';

import { Idea, IdeaType, TeamType } from './model';
import { IdeaDataInterface } from '~/components/CSH/dashboad/TeamView';
import uploadPDF from './uploader';

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log('Using cached db connection');
    return cachedConnection;
  }
  try {
    const cnx = await mongoose.connect(env.MONGO_DB_URL);
    cachedConnection = cnx.connection;
    console.log('New mongodb connection established');
    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export type TeamWithPasswordHash = Omit<Team, 'leader'> & {
  leader: {
    name: string;
    email: string;
    contact: string;
    passwordHash: string;
  };
};

export const getTeam = async (teamId: string) => {
  await connectToMongoDB();
  const team = await TeamType.findOne({ teamId });
  if (!team) {
    throw new Error('Team not found');
  }

  return {
    teamName: team.teamName,
    leader: {
      name: team.leader.name,
      email: team.leader.email,
      contact: team.leader.contact,
      passwordHash: team.leader.passwordHash,
    },
    members: team.members.map((member) => ({
      name: member.name,
      email: member.email,
      contact: member.contact,
    })),
  } as TeamWithPasswordHash;
};

export const getIdea = async (teamId: string) => {
  await connectToMongoDB();
  const idea = await TeamType.findOne({ teamId });
  if (!idea) {
    throw new Error('Idea not found');
  }

  return { success: true, idea: idea };
};

const EMAIL = 'ecellnita.csh2024@gmail.com';
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: env.EMAIL_PASSWORD,
  },
});

export const register = async (team: Team) => {
  await connectToMongoDB();
  const leaderEmail = await TeamType.findOne({
    'leader.email': team.leader.email,
  });
  const TeamName = await TeamType.findOne({ teamName: team.teamName });

  console.log(TeamName);

  if (leaderEmail) {
    throw new Error('Leader email already exists');
  }
  if (TeamName) {
    throw new Error('Team name already exists');
  }
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(team.leader.password, saltRounds);
  const teamId = uuidv4();
  const newTeam = new TeamType({
    teamId,
    teamName: team.teamName,
    leader: { ...team.leader, passwordHash },
    members: team.members,
  });

  await newTeam.save();

  const domain = team.leader.email.split('@')[1];

  if (!domain) {
    throw new Error('Invalid email');
  }

  const mailOptions = {
    from: EMAIL,
    to: team.leader.email,
    subject: 'Registration Successful',
    html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Registration Successful</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333333;
                        background-color: #f8f9fa;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 600px;
                        margin: 0 auto;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        color: #4CAF50;
                    }
                    p {
                        font-size: 16px;
                        line-height: 1.5;
                    }
                    .team-id {
                        font-weight: bold;
                        color: #4CAF50;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Congratulations!</h1>
                    <p>Your registration was successful. Thank you for joining our hackathon event!</p>
                    <p><strong>Here is your Team Unique ID:</strong> <span class="team-id">${teamId}</span></p>
                    <p><strong>Team Password:</strong> <span class="team-id">${team.leader.password}</span></p>
                    <p>Please save this ID for future logins.</p>
                    <p>We look forward to seeing your innovative solutions!</p>
                    <br>
                    <p>Best regards,</p>
                    <p>Team E-cell, NIT Agartala</p>
                </div>
            </body>
            </html>
            `,
  };

  await transporter.sendMail(mailOptions);

  return { teamId, message: 'Team created successfully' };
};

export const login = async (teamId: string, password: string) => {
  await connectToMongoDB();
  const team = await TeamType.findOne({ teamId });
  if (!team) {
    throw new Error('Team not found');
  }

  const isPasswordValid = await bcrypt.compare(
    password,
    team.leader.passwordHash
  );

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return {
    message: 'Login successful',
    teamId: team.teamId,
  };
};

export const editTeam = async (teamId: string, newData: TeamUpdateType) => {
  await connectToMongoDB();
  const exists = await TeamType.findOne({ teamId });
  if (!exists) {
    throw new Error('Team not found');
  }
  const team = await TeamType.updateOne(
    { teamId },
    {
      $set: {
        ...newData,
        leader: { ...newData.leader, passwordHash: exists.leader.passwordHash },
      },
    },
    { new: true }
  );

  return {
    message: 'Team updated successfully',
    success: team.acknowledged,
  };
};

export const submitIdea = async (teamId: string, ideaData: IdeaDataInterface) => {
  console.log("first: ", ideaData);
  try {
    await connectToMongoDB();

    const team = await TeamType.findOne({ teamId });
    if (!team) {
      throw new Error('Team not found');
    }

    const idea = await IdeaType.findOne({ teamId });
    if(idea){
      throw new Error('Idea already submitted');
    }

    const newIdea = new IdeaType({
      teamId: teamId,
      problemStatement: ideaData.problemStatement,
      subProblemStatement: ideaData.subProblemStatement,
      file: teamId
    });

    await newIdea.save();

    console.log("Idea submitted successfully");

    return JSON.stringify({ teamId, message: 'Idea submitted successfully', success: true });
  } catch (error) {
    console.log("can not submit idea from submitIdea: ", error);
    return JSON.stringify({ error: error, success: false });
  }

}
