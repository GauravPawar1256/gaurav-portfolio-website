# Gaurav Pawar — Data Analyst Portfolio

A responsive dark-mode portfolio built with React, Vite and Tailwind CSS.

## 1. Requirements
- Node.js 18.18+ (Node.js 20 LTS recommended)
- npm
- VS Code (recommended)

Check your installation:
```bash
node -v
npm -v
```

## 2. Run locally
Open this folder in VS Code, then run:
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal (usually http://localhost:5173).

## 3. Personalize before publishing
Update `src/App.jsx`:
- `profile.name`, `profile.email`, `profile.linkedin`, and `profile.github`
- About and education details
- Skill groups and project descriptions
- Replace every `your-github-username` project URL with the real repository URL

### Add your profile photo
1. Choose a clear, professional headshot.
2. Rename it to `profile-photo.jpg`.
3. Put it in the `public/` folder.
4. Keep the image reasonably compressed (ideally under 500 KB).

The hero section displays a GP placeholder until `public/profile-photo.jpg` exists.

### Add your resume (optional)
Put your PDF in `public/` and name it `resume.pdf`. You can then add a Resume link using `/resume.pdf`.

## 4. Build and preview
```bash
npm run build
npm run preview
```
The production website is generated in the `dist/` folder.

## 5. Deploy to Vercel
1. Create a GitHub repository, for example `Gaurav-data-analyst-portfolio`.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Create data analyst portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Gaurav-data-analyst-portfolio.git
   git push -u origin main
   ```
3. Sign in to Vercel with GitHub.
4. Select **Add New → Project**, then import the repository.
5. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
6. Click **Deploy**. Vercel will provide a public URL.
7. Future pushes to the connected GitHub branch will trigger new deployments.

## 6. Before you share it
- Replace all placeholder links and the sample email.
- Add your real profile photo.
- Verify each project description accurately reflects your work.
- Add a real resume PDF if you want to link one.
- Test on mobile and desktop.
- Run `npm run build` and fix any errors before deployment.

## Tech stack
React 18 · Vite 6 · Tailwind CSS 4 · Lucide React
