import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY || import.meta.env.VITE_OPEN_AI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;