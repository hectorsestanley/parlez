# 🇫🇷 Parlez — Learn French by Speaking

An AI-powered French tutor that teaches through structured conversational practice. Speech-first design with text backup.

## Features

- **🎙️ Speech-first**: Speak French using your microphone, hear responses read aloud
- **🤖 AI conversations**: Gemini-powered role-play scenarios (café, directions, interviews...)
- **📚 Structured lessons**: A1 → A2 → B1 progression with unlock system
- **📊 Progress tracking**: Lessons completed, words learned, day streaks
- **💡 In-context learning**: Vocabulary, phrases, and grammar tips before each lesson
- **✦ Gentle corrections**: Big errors corrected, small ones let slide

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **AI**: Google Gemini API (free tier)
- **Speech**: Web Speech API (browser-native)
- **Database**: Supabase (with localStorage fallback)
- **Styling**: Tailwind CSS
- **Hosting**: Vercel

## Quick Setup

### 1. Clone & Install

```bash
git clone <your-repo>
cd parlez
npm install
```

### 2. Get API Keys

**Gemini API** (free):
1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Create an API key
3. Copy it

**Supabase** (free tier):
1. Go to [supabase.com](https://supabase.com) and create a project
2. Go to **Settings > API** and copy your Project URL and anon/public key
3. Go to **SQL Editor** and run the contents of `supabase-migration.sql`

### 3. Configure Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your keys:
```
GEMINI_API_KEY=your_key_here
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### 4. Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

```bash
npx vercel
```

Add your environment variables in **Vercel Dashboard > Settings > Environment Variables**.

## Lesson Structure

| Level | Module | Lessons |
|-------|--------|---------|
| A1 | First Steps | Meeting Someone, At a Café, Numbers & Shopping |
| A1 | Getting Around | Asking for Directions, Taking the Train |
| A2 | Daily Life | At the Restaurant, Making Plans, Talking About Work |
| A2 | Social Life | At a House Party |
| B1 | Professional Life | Job Interview, Giving Your Opinion |
| B1 | Culture & Life | Describing Experiences |

## How It Works

1. **Pick a lesson** from the structured path
2. **Review vocab & phrases** before starting
3. **Speak French** into your mic (or type as backup)
4. **AI responds** in character, correcting big errors gently
5. **Complete the lesson** to track progress and unlock the next one

## Browser Support

Speech recognition works best in:
- Chrome (desktop & Android)
- Edge
- Safari (iOS 14.5+)

Firefox has limited speech recognition support — text input works as fallback everywhere.

## Notes

- The app uses localStorage for progress by default. Wire up Supabase env vars for persistent/cross-device storage.
- Gemini free tier has rate limits — sufficient for personal use.
- Speech recognition requires microphone permission.
