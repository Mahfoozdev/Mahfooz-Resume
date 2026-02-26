<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
=======
# Mahfooz-Resume
I developed a powerful, free Resume Builder application that solves the frustration I experienced with premium CV-making platforms. Many existing platforms either require expensive subscriptions or produce poorly formatted CVs that fail ATS (Applicant Tracking System) screening. This app was born from my personal need to create professional, ATS-compatible resumes quickly and efficiently.
Generate Your ATS-Friendly CV in Minutes!
Step 1: Open the Website
Navigate to the Resume Builder app

No sign-up required - start immediately
Mobile, tablet, and desktop friendly

Step 2: Fill in Your Information
The intuitive form is organized into clear sections:

📋 Contact Information
Full Name
Location
Phone Number
Email Address
Portfolio Website
GitHub Profile Links

👤 Professional Summary
Write or paste your career summary
Real-time preview shows exactly how it will look

💼 Work Experience (Add as many as you need!)
Job Role/Title
Employment Period
Company Name
Location
Detailed responsibilities (one point per line)

➕ Add more experiences with one click
✖️ Remove any experience easily

🛠️ Skills
Two columns for organized skill listing
Comma-separated for easy entry

🎓 Education
Degree/Qualification
Completion Date
School/University Name
Location

🌐 Languages
List your language proficiencies
Comma-separated format

⚙️ Customize
Choose your preferred font style:
Times New Roman (classic professional)
Arial (clean modern look)
Calibri (contemporary style)

Step 3: Download & Submit
Click "Download Direct PDF" button

Your professionally formatted resume generates instantly

File automatically saves as: YOURNAME_Resume.pdf

Review the perfect formatting

Submit to your dream job applications!

✨ Bonus: Print Option
Use "Print / Save Browser PDF" for additional printing options

Perfect for physical copies or backup formats

🎯 That's It!
3 Simple Steps → Professional Resume → Job Applications → Career Success!

No subscriptions. No hidden fees. No complicated software. Just a clean, ATS-friendly resume ready in minutes!
>>>>>>> e2b77f0403dc30b41cf1e224dd5b1821773ffa98
