import OpenAI from 'openai';
import { OPENAI_KEY } from './constants';

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY || OPENAI_KEY,
  dangerouslyAllowBrowser: true // This is the default and can be omitted
});

export default client;