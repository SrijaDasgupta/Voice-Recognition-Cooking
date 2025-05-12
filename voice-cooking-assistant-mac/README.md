
# 🎙️ Voice Cooking Assistant

A desktop voice-enabled cooking assistant built with Electron.js for macOS. Users can speak commands like "Find a pancake recipe" or "Set timer for 2 minutes", and the assistant will respond using text-to-speech.

## 🚀 Features

- 🗣️ Voice input using Web Speech API
- 🔊 Speech output for instructions
- ⏲️ Timer control via voice (e.g., “Set timer for 5 minutes”)
- 🍽️ Recipe fetching integration placeholder
- 🧠 Simple, clean UI built with HTML, CSS, and JS
- 🖥️ Packaged as a macOS desktop app using Electron

---

## 🛠️ Tech Stack

- Electron.js
- HTML/CSS/JavaScript
- Web Speech API
- Spoonacular API for recipes

---

## 📸 Preview

![Mic Icon](assets/mic-icon.png)

---

## 🧑‍🍳 Getting Started (macOS)

### 1. Clone the repository or unzip the folder

```bash
git clone https://github.com/your-username/voice-cooking-assistant.git
cd voice-cooking-assistant
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

---

## 📦 Build as a macOS `.app`

Make sure you have `electron-packager`:

```bash
npm install -g electron-packager
```

Then run:

```bash
electron-packager . VoiceCookingAssistant --platform=darwin --arch=x64 --icon=assets/mic-icon.png --overwrite
```

This will generate a `VoiceCookingAssistant.app` inside a `VoiceCookingAssistant-darwin-x64` folder.

---

## 🌐 Deploy as Web App (Optional)

To host a web version:

1. Remove `main.js` and `package.json`
2. Push to GitHub or deploy using Netlify/Vercel
3. Ensure only these files remain:
   - `index.html`
   - `style.css`
   - `renderer.js`
   - `assets/`

---

## 📌 Voice Commands (Examples)

- "Find a recipe for pasta"
- "Set timer for 3 minutes"
- "What can I cook with potatoes?"

---




