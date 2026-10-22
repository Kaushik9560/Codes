# Codes

V Semester BCA frontend lab ke 7 dedicated React projects. Har folder ka apna `src/App.jsx`, component, `package.json` aur setup hai.

Code mein basic `useState`, named functions, `if` conditions aur simple CSS use hui hai. TODO list mein `concat`, `map` aur `filter` ke steps alag likhe hain. Lifecycle exercise class component ke standard methods dikhati hai.

## Clone aur run

Example: component lifecycle project.

```bash
git clone https://github.com/Kaushik9560/Codes.git
cd Codes/07-component-lifecycle
npm install
npm run dev
```

Vite ka Local URL browser mein kholo. Node.js 22.12+ ya Node 24 installed hona chahiye. Agar repo pehle se clone hai to repo root par `git pull` karo, phir desired project folder mein jao.

## Projects

| No. | Project | Main component |
| --- | --- | --- |
| 4 | [Welcome using JSX](04-welcome-jsx/README.md) | [`Welcome.jsx`](04-welcome-jsx/src/Welcome.jsx) |
| 5 | [Counter](05-counter/README.md) | [`Counter.jsx`](05-counter/src/Counter.jsx) |
| 6 | [Login and Logout](06-login-logout/README.md) | [`LoginLogout.jsx`](06-login-logout/src/LoginLogout.jsx) |
| 7 | [Component lifecycle methods](07-component-lifecycle/README.md) | [`LifecycleDemo.jsx`](07-component-lifecycle/src/LifecycleDemo.jsx) |
| 8 | [TODO list](08-todo-list/README.md) | [`TodoList.jsx`](08-todo-list/src/TodoList.jsx) |
| 9 | [Dynamic colour changer](09-colour-changer/README.md) | [`ColorChanger.jsx`](09-colour-changer/src/ColorChanger.jsx) |
| 10 | [External CSS styling](10-external-css/README.md) | [`StyledComponent.jsx`](10-external-css/src/StyledComponent.jsx) |

Har project ka structure:

```text
project-folder/
  package.json
  package-lock.json
  index.html
  vite.config.js
  eslint.config.js
  src/
    main.jsx
    App.jsx
    ProgramComponent.jsx
    index.css
```

`ProgramComponent.jsx` ki jagah table mein diya actual component filename hoga. Program 10 mein `src/StyledComponent.css` bhi hai.

## Sirf ek project rakhna hai

Jis project ki zarurat hai uska **poora folder** rakho. Baaki project folders delete kar sakte ho. Selected folder ko repo se bahar copy/move karke bhi `npm install` aur `npm run dev` se chala sakte ho. Kisi parent setup ya doosre project ki file ki zarurat nahi hai.

Program edit karne ke liye uski component file kholo. `src/App.jsx` us project ki entry component hai; lifecycle project mein wahi mount/unmount button bhi manage karti hai. Code ke upar short usage steps aur har project ke README mein complete run/output instructions hain.

Programs 1–3 manual mein plain JavaScript exercises hain; yahan React programs 4–10 hain. Har project ko uske folder se `npm run lint` aur `npm run build` se check kar sakte ho.
