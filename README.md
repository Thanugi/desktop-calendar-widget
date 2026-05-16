# 🗓️ Desktop Calendar Widget

A tiny retro-style desktop widget that shows today's date and your Google Calendar events — built with Electron and a lot of ☕.

Built for personal use and fun, but thought it'd be cool to share!

---

## ✨ What it does

- Shows today's **date and month** in a retro pixel style
- Click the arrow to see all your **Google Calendar events for the day**
- Events are sorted by time, morning to night
- Sits on your desktop, always on top, auto-launches on startup

---

## 💻 Requirements

- Windows 10 or 11
- A Google account with Google Calendar

---

## 🚀 Setup Guide

### Step 1 — Download the installer

Download **`Calendar Widget Setup 1.0.0.exe`** from the `dist` folder above and run it.

### Step 2 — Set up Google Calendar API

This app connects to your own Google Calendar. You'll need to create a free API key:

1. Go to 👉 https://console.cloud.google.com and sign in
2. Click **"Select a project"** → **"New Project"** → name it anything → **Create**
3. Go to **APIs & Services → Library** → search **"Google Calendar API"** → **Enable**
4. Go to **APIs & Services → Credentials** → **"+ Create Credentials"** → **"OAuth client ID"**
5. If asked to configure consent screen:
   - Choose **External** → fill in your app name and email → Save
   - Go back to Credentials and create the OAuth client ID again
6. Choose **Desktop app** → name it anything → **Create**
7. Click **Download JSON** → rename the file to `credentials.json`

### Step 3 — Add credentials to the app

1. Find where the app is installed — usually:
C:\Users\YourName\AppData\Local\Programs\desktop-calendar-widget

2. Copy your `credentials.json` file into that folder

### Step 4 — Run the app

Open **Calendar Widget** from your Start menu. A browser window will pop up asking you to sign in to Google — sign in and click Allow.

That's it! The widget will appear on your desktop and launch automatically every time Windows starts. 🎉

---

## 🎨 Design

Designed in Figma with a retro pixel aesthetic using the [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) font.

---

## 🛠️ Built with

- [Electron](https://www.electronjs.org/)
- [Google Calendar API](https://developers.google.com/calendar)
- HTML / CSS / JavaScript

---

## 📬 Questions?

Feel free to open an issue or reach out on [LinkedIn]www.linkedin.com/in/thanugi-weerasinghe-6799772b5!