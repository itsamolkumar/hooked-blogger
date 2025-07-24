<h1 align="center">📝 Hooked Blogger</h1>
<p align="center">Your personal blog CMS built with <b>React, Redux, Tailwind, Appwrite, Node</b> and ❤️.</p>

<div align="center">
  <img src="https://img.shields.io/badge/Author-Amol_Kumar-blue" alt="Author" />
  <img src="https://img.shields.io/badge/Status-Active-brightgreen" />
  <img src="https://img.shields.io/badge/License-MIT-lightgrey" />
</div>

<br/>

### 🌐 Live Demo

🚀 Check out the live project here:  
👉 [https://hooked-blogger.vercel.app](https://hooked-blogger.vercel.app) <!-- 🔁 Replace with your actual deployed link -->

---

## 📸 Preview

> 🖼️ Add screenshot here (optional)  
> ![App Screenshot](./hooked-Blogger/screenshorts/Screenshot(22).png)
> ![App Screenshot](./hooked-Blogger/screenshorts/Screenshot(23).png)

---

## 🧠 Features

- 🔐 **User Authentication** (Login, Sign Up, Protected Routes)
- 📝 **Create, Edit, and Delete Blogs**
- 🌈 Beautiful & responsive UI using **Tailwind CSS**
- 🖼️ Upload images using **Appwrite Storage**
- 🔍 View blogs by route `/blogs/:id`
- ✨ Add tags, statuses, and featured images
- 🧠 Auth persistence with Appwrite + Redux Toolkit

---

## 🛠️ Tech Stack

| Frontend  | Backend | Auth & DB     | Styling       | Routing         |
|-----------|---------|---------------|----------------|------------------|
| React.js  | Appwrite Functions | Appwrite DB + Account | Tailwind CSS | React Router DOM |

---

## ⚙️ Installation & Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/itsamolkumar/hooked-blogger.git
cd hooked-Blogger

# 2. Install dependencies
npm install

# 3. Setup Appwrite project
#    - Create Project
#    - Create Database, Collection, and Bucket
#    - Add env details below

# 4. Create `.env` or `conf/conf.js` with:
