# 🎉 Random GIF Generator with React & Giphy API

This is a fun little project that lets you generate random GIFs from Giphy based on different content ratings (`g`, `pg`, `pg-13`, `r`). It uses a **custom React hook** to handle fetching the GIFs and displaying them dynamically.

---

## 🚀 Features

- Built with **React** and **Tailwind CSS**.
- Fetches random GIFs from **Giphy API**.
- Buttons to choose content rating (`g`, `pg`, `pg-13`, `r`).
- Uses a **custom React hook** (`useGif`) for fetching GIFs.

---

## 🎥 Video Demo

Check out the demo video on Twitter:  
[Watch on Twitter](https://x.com/nikhilshaw575/status/1928869888354852967)

---

## 🔑 How to Get Your Giphy API Key

To fetch GIFs from Giphy, you need an API key. Follow these simple steps to get yours:

1. **Go to the Giphy Developers website:**  
   [https://developers.giphy.com/](https://developers.giphy.com/)

2. **Sign up or log in** with your Giphy account.

3. **Create a new app** by clicking on **“Create an App”** in your dashboard.

4. Choose the **API** option (usually “**API Key**”) and give your app a name.

5. After submitting, you will receive an **API key** — a string of letters and numbers.

6. Copy that API key and paste it into your project where it says:  
   ```js
   const apiKey = 'YOUR_API_KEY';
