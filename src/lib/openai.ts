import OpenAI from "openai";

const OPENAI_MODEL = "gpt-5.4";

export async function generatePodcastScript(prompt: string) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is not set");
  }

  const openai = new OpenAI({ apiKey });
  const response = await openai.responses.create({
    model: OPENAI_MODEL,
    input: prompt,
  });

  const text = response.output_text?.trim() ?? "";
  if (!text) {
    throw new Error("OpenAI returned an empty podcast script");
  }

  return text;
}
