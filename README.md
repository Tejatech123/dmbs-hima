# 🚨 CRIMTRACK: THE COMPLETE BEGINNER'S GUIDE

Welcome to your first professional web application! **CrimTrack** is a high-tech "Criminal Records Management System." Since this is your first time, here is exactly how everything works, step-by-step.

---

## 🏗️ 1. Understanding Your Project (Where is everything?)

Your project is built with **Next.js** (the skeleton) and **Tailwind CSS** (the skin/design).

- **`src/app`**: This is where your **Pages** live.
  - `(auth)/login`: The Login screen.
  - `(dashboard)`: The main app area.
    - `page.tsx`: Your Dashboard (Stats/Charts).
    - `records`: The list of criminals.
    - `records/new`: The form to add a new criminal.
- **`src/components`**: These are reusable "Legos" like the **Sidebar**.
- **`src/lib/supabase.ts`**: The "Bridge" that connects your website to your Database.
- **`.env.local`**: This is your **Secret Key** file. You put your database passwords here.

---

## ☁️ 2. Setting Up Your Database (The "Super Page")

Without a database, your data won't save forever. We use **Supabase** because it's free and easy.

1.  **Sign Up**: Go to [Supabase.com](https://supabase.com) and click "Start your project."
2.  **New Project**: Name it "CrimTrack" and set a password.
3.  **Setup Tables (SQL)**: 
    - On the left sidebar in Supabase, click **"SQL Editor"**.
    - Click **"+ New Query"**.
    - Copy the code from the [Supabase Schema](file:///Users/manitejadaripelly/.gemini/antigravity/brain/e0feaaca-c862-4ae4-99cf-3ec9582747c7/artifacts/supabase_schema.sql) file I gave you.
    - Click **"Run"**. This creates the "Folders" for your data.
4.  **Connect Keys**:
    - In Supabase, click **"Project Settings"** (Gear icon) -> **"API"**.
    - Copy the `Project URL`.
    - Copy the `anon public` key.
    - Open your file called [`.env.local`](file:///Users/manitejadaripelly/Criminal-DBMS/.env.local) and paste them there.

---

## 💻 3. How to Edit the Code

1.  **Change Colors**: Open [`src/app/globals.css`](file:///Users/manitejadaripelly/Criminal-DBMS/src/app/globals.css). Look for `--primary-accent: #ff2d3f;`. Change that hex code to any color you like (e.g., `#00ff00` for green).
2.  **Change Text**: Open any `page.tsx` file. Find the text inside tags like `<h1>...</h1>` and change it. The website will update instantly!
3.  **Change Icons**: We use **Lucide React**. You can find thousands of icons at [lucide.dev](https://lucide.dev). To use a new one, import it at the top of the file.

---

## 🚦 4. How to Run Your App

Every time you want to work on your project:
1.  Open your Terminal.
2.  Type: `npm run dev`
3.  Open your browser to: `http://localhost:3000`

---

## 👤 5. Using the Application

- **Login**: Use `admin` and `admin123`.
- **Add Record**: Click "File New Record" and answer the 11 questions.
- **Save**: Click "Commit to Database." If your Supabase is connected, it will save to the cloud!
- **Edit/Delete**: Use the small blue and red icons on the criminal cards.

---

### 💡 Pro Tip for Beginners:
*If you see a red error screen, don't panic! Usually, it's just a missing comma or a typo. Check the "Terminal" for the line number where the error is.*

**You are now a developer! Ready to catch some digital criminals?** 🕵️‍♂️
