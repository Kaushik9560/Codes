# Program 8 — TODO list

Yeh independent React + Vite project hai. Is folder ke bahar ki kisi file ya doosre lab program ki zarurat nahi. Node.js 22.12+ ya Node 24 installed hona chahiye.

## Clone karke seedha run karo

```bash
git clone https://github.com/Kaushik9560/Codes.git
cd Codes/exp/programs/08-todo-list
npm install
npm run dev
```

Browser mein Vite ka printed Local URL kholo. Agar repository pehle se clone hai, uski root par `git pull` karke `exp/programs/08-todo-list` mein jao. Agar terminal isi project folder mein hai to sirf `npm install` aur `npm run dev` chalao.

## Sirf yeh program rakhna hai

Is poore **`08-todo-list`** folder ko rakh lo. Baaki program folders delete kar sakte ho. Is folder ko repo se bahar kisi bhi location par copy/move karke bhi chala sakte ho.

Is folder ke andar `App.jsx`, `main.jsx`, `index.html`, `index.css`, `package.json`, `package-lock.json`, `vite.config.js` aur `eslint.config.js` saath rakho. `node_modules/` dependencies hain: delete ho jaaye to `npm install` se wapas aa jayengi. `dist/` build output hai aur `npm run build` se dobara ban sakta hai.

## Code edit ya copy karo

- Program ka code **[App.jsx](App.jsx)** mein hai. Upar detailed usage aur expected output ke steps hain.
- Is project mein `App.jsx` isi folder ke root par hai; `src/` banana zaruri nahi.
- Kisi doosre Vite React project mein use karne ke liye is poori `App.jsx` ko uske `src/App.jsx` mein paste karo. Uske `src/main.jsx` ko rehne do.
- Is App.jsx ko copy karne ke liye koi extra component ya CSS file nahi chahiye.

## Validate aur build

```bash
npm run lint
npm run build
npm run preview
```

`npm run preview` production build ka local preview dikhata hai. Server stop karne ke liye terminal mein Ctrl+C dabao.
