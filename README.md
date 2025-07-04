# 🎬 Movie App

A responsive movie browsing and search application built with React and The Movie Database (TMDB) API. Users can explore popular movies, search for specific titles, and manage a favorites list.

---

## 🚀 Features

- 🔍 Search movies by title
- 🎥 View trending/popular movies on homepage
- ❤️ Add/remove movies from your favorites
- 📱 Fully responsive design (mobile/tablet/desktop)
- ⚡ Fast dev server using Vite

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TMDB API](https://www.themoviedb.org/)
- [Context API](https://reactjs.org/docs/context.html)
- CSS (responsive layout)
- [Vite](https://vitejs.dev/)

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/zivshamli/MoviesReccomendation.git
cd movie-app

## 🔑 Add Your TMDB API Key

To fetch data from TMDB, you need to provide an API key.

### Step-by-step:

1. Sign up at [TMDB](https://www.themoviedb.org/) if you haven't already.
2. Get your **API key** from:  
   `Account Settings` → `API` → `Create API Key`.
3. In the file **`src/services/api.js`**, locate the line where the API key is used (usually like this):

```js
const API_KEY = "YOUR_API_KEY"; // ← Replace this line!


```bash
npm install
npm run dev

