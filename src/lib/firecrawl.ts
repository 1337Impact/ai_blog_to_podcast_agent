const FIRECRAWL_URL = "https://api.firecrawl.dev/v1/scrape";

type FirecrawlResponse = {
  success?: boolean;
  data?: {
    markdown?: string;
    content?: string;
    metadata?: {
      title?: string;
      description?: string;
      sourceURL?: string;
    };
  };
  error?: string;
};

export async function scrapeBlog(url: string) {
  const apiKey = process.env.FIRECRAWL_API_KEY;
  if (!apiKey) {
    throw new Error("FIRECRAWL_API_KEY is not set");
  }

  const response = await fetch(FIRECRAWL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      url,
      formats: ["markdown"],
      onlyMainContent: true,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Failed to scrape blog (${response.status}): ${detail}`);
  }

  const payload = (await response.json()) as FirecrawlResponse;
  const markdown = payload.data?.markdown ?? payload.data?.content ?? "";

  if (!payload.success || !markdown.trim()) {
    throw new Error(payload.error || "Firecrawl returned empty content");
  }

  return {
    markdown,
    title: payload.data?.metadata?.title?.trim() || new URL(url).hostname,
  };
}
