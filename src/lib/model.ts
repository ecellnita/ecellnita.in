import mongoose, { type Document, type Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface ITeam {
  teamId: string;
  teamName: string;
  leader: {
    name: string;
    email: string;
    contact: string;
    passwordHash: string;
  };
  members: {
    name: string;
    email: string;
    contact: string;
  }[];
}

export interface Idea {
  teamId: string;
  problemStatement: string;
  subProblemStatement?: string;
  file: string;
}

export interface ITeamDocument extends ITeam, Document {}

const teamSchema = new mongoose.Schema({
  teamId: { type: String, unique: true, default: uuidv4 },
  teamName: { type: String, required: true },
  leader: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    passwordHash: { type: String, required: true },
  },
  members: [
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      contact: { type: String, required: true },
    },
  ],
});

const ideaSchema = new mongoose.Schema({
  teamId: { type: String, unique: true, default: uuidv4 },
  problemStatement: { type: String, required: true },
  subProblemStatement: { type: String },
  file: { type: String, required: true },
});

export interface IdeaDocument extends Idea, Document {}

// @ts-expect-error we know that it is correct
export const TeamType: Model<ITeamDocument> =
  mongoose.models.Team ?? mongoose.model('Team', teamSchema);

// @ts-expect-error we know that it is correct
export const IdeaType: Model<IdeaDocument> = 
  mongoose.models.Idea ?? mongoose.model('Idea', ideaSchema);
