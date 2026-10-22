# Program 8 — TODO list

Dedicated React + Vite project. Iska apna `src/`, `package.json`, lockfile aur configuration hai. Node.js 22.12+ ya Node 24 use karo.

## Run karne ke steps

```bash
git clone https://github.com/Kaushik9560/Codes.git
cd Codes/08-todo-list
npm install
npm run dev
```

Terminal mein printed Local URL browser mein kholo. Agar repo pehle se clone hai, repo root par `git pull` karo aur `08-todo-list` mein jao. Agar terminal isi project folder mein hai to `npm install` aur `npm run dev` se start karo. Server stop karne ke liye Ctrl+C dabao.

## Files

```text
08-todo-list/
  package.json
  package-lock.json
  index.html
  vite.config.js
  eslint.config.js
  src/
    main.jsx
    App.jsx
    TodoList.jsx
    index.css
```

- `src/main.jsx`: React entry, jo App ko render karti hai.
- `src/App.jsx`: sirf is project ka TodoList component render karti hai.
- `src/TodoList.jsx`: is lab program ki main logic aur UI.
- `src/index.css`: is project ki base styling.

## Output check karo

1. Task likho aur Add dabao ya Enter press karo.
2. Khali task add nahi hoga. Done se complete karo; Delete se task hatao.
3. Refresh par tasks clear honge; tasks memory mein hain.

## Sirf yeh project rakhna hai

Poora **`08-todo-list`** folder rakho. Baaki project folders delete kar sakte ho. Is folder ko kisi doosri location par copy/move karke bhi `npm install` aur `npm run dev` se chala sakte ho. Apne folder ki `src/` aur config files saath rakho.

## Apne doosre React project mein use karo

1. `src/App.jsx` aur `src/TodoList.jsx` ko apne project ke `src/` mein copy karo.
2. `src/index.css` bhi copy karo; apni entry `src/main.jsx` se ise import karo.
3. Apne project folder se `npm install` aur `npm run dev` chalao.

## Checks

```bash
npm run lint
npm run build
```

Production build ka local preview dekhna ho to build ke baad `npm run preview` chalao.
