# Still — Guided Meditation Library

A free, static web app with **71 original guided meditations** across 18 categories, a built-in spoken narrator, generative ambient sounds, and local progress tracking. No backend, no build step, no external audio files.

## Features

- **71 guided meditation scripts** spanning Sleep, Stress Relief, Anxiety Relief, Morning Energy, Body Scan, Breathing, Loving-Kindness, Gratitude, Focus & Productivity, Walking Meditation, Grief & Difficult Emotions, Confidence & Self-Esteem, Quick Resets (1–3 min), Beginner's Mind, Mindful Eating, Nature Visualization, Chakra & Energy, and Pain & Illness Relief.
- **Spoken narration** using the browser's built-in Web Speech API (`SpeechSynthesis`) — no audio files to download, works offline once loaded, adjustable speed.
- **Generative ambient sounds** (rain, ocean, white noise, soft drone) synthesized live with the Web Audio API — no licensed audio needed.
- **Session timer** with a breathing-orb animation and progress bar.
- **Search & filters** by category and duration.
- **Favorites**, **session stats**, and a **daily streak counter**, all stored locally in your browser (`localStorage`).
- **Light/dark theme**, fully responsive down to phone widths.

## Running it

No installation or build required — it's plain HTML/CSS/JS.

```bash
# from the project directory
python3 -m http.server 8080
# then open http://localhost:8080 in your browser
```

Or just open `index.html` directly in a browser (some browsers restrict `fetch`/module loading from `file://`, but this app uses plain `<script>` tags, so it works fine either way).

## Project structure

- `index.html` — page structure and player modal
- `style.css` — theming, layout, responsive design
- `data.js` — the meditation library (`MEDITATIONS` array: id, title, category, duration, level, description, script)
- `app.js` — all app logic: rendering, search/filter, the player, text-to-speech, ambient audio synthesis, favorites, and stats

## Adding your own meditations

Add an object to the `MEDITATIONS` array in `data.js`:

```js
{
  id: "unique-id",
  title: "Meditation Title",
  category: "Sleep", // any existing or new category
  duration: 8,        // minutes
  level: "Beginner",  // Beginner | Intermediate | Advanced | All Levels
  description: "One-line description shown on the card.",
  script: `First paragraph.

Second paragraph, separated by a blank line — each paragraph is narrated and highlighted separately.`
}
```

No other code changes are needed — new categories and meditations are picked up automatically.
