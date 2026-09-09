const ELEVENLABS_VOICE_ID = "JBFqnCBsd6RMkjVDRZzb";
const ELEVENLABS_MODEL_ID = "eleven_multilingual_v2";

export async function synthesizePodcast(text: string) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    throw new Error("ELEVENLABS_API_KEY is not set");
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        Accept: "audio/mpeg",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        model_id: ELEVENLABS_MODEL_ID,
      }),
    },
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(
      `Failed to generate audio (${response.status}): ${detail}`,
    );
  }

  return Buffer.from(await response.arrayBuffer());
}
