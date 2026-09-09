## 📰 ➡️ 🎙️ Blog to Podcast Agent
This is a Streamlit-based application that allows users to convert any blog post into a podcast. The app uses OpenAI's GPT-4 model for summarization, Firecrawl for scraping blog content, and ElevenLabs API for generating audio. Users simply input a blog URL, and the app will generate a podcast episode based on the blog.

## Features

- **Blog Scraping**: Scrapes the full content of any public blog URL using Firecrawl API.

- **Summary Generation**: Creates an engaging and concise summary of the blog (within 2000 characters) using OpenAI GPT-4.

- **Podcast Generation**: Converts the summary into an audio podcast using the ElevenLabs voice API.

- **API Key Integration**: Requires OpenAI, Firecrawl, and ElevenLabs API keys loaded from a `.env` file.

## Setup

### Requirements 

1. **API Keys**:
    - **OpenAI API Key**: Sign up at OpenAI to obtain your API key.

    - **ElevenLabs API Key**: Get your ElevenLabs API key from ElevenLabs.

    - **Firecrawl API Key**: Get your Firecrawl API key from Firecrawl.

2. **Python 3.8+**: Ensure you have Python 3.8 or higher installed.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/1337Impact/ai_blog_to_podcast_agent
   cd ai_blog_to_podcast_agent
   ```

2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file from the example and add your API keys:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and set `OPENAI_API_KEY`, `ELEVENLABS_API_KEY`, and `FIRECRAWL_API_KEY`.

### Running the App

1. Start the Streamlit app:
   ```bash
   streamlit run blog_to_podcast_agent.py
   ```

2. In the app interface:
    - Input the blog URL you want to convert.

    - Click "🎙️ Generate Podcast".

    - Listen to the generated podcast or download it.