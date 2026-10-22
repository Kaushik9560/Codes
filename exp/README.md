# V Semester BCA — React Frontend Lab

Seven React programs (4–10) based on **V SEM BCA-MANUAL FRONTEND LAB PROGRAM-2-2**. Programs 1–3 in the manual are plain JavaScript exercises; this collection covers the React section.

Each program keeps its React code in one `App.jsx`, so students can copy the entire file into their own React project. No UI libraries or extra packages are required beyond React and React DOM. Program 10 also needs its external CSS file because external styling is the exercise.

## Programs

| No. | Program / copyable file | Additional file | Expected result |
| --- | --- | --- | --- |
| 4 | [Welcome using JSX](programs/04-welcome-jsx/App.jsx) | None | Welcome heading and JSX message |
| 5 | [Counter](programs/05-counter/App.jsx) | None | Increment, decrement, and reset a count starting at 0 |
| 6 | [Conditional rendering](programs/06-login-logout/App.jsx) | None | Login/logout button switches the displayed message |
| 7 | [Component lifecycle](programs/07-component-lifecycle/App.jsx) | None | Class lifecycle messages in the browser console; mount, update, and unmount buttons |
| 8 | [TODO list](programs/08-todo-list/App.jsx) | None | Add tasks, mark them done, and delete them |
| 9 | [Dynamic colour changer](programs/09-colour-changer/App.jsx) | None | Six buttons change the background and displayed colour code |
| 10 | [External CSS styling](programs/10-external-css/App.jsx) | [StyledComponent.css](programs/10-external-css/StyledComponent.css) | Styled card and a message after clicking Learn React |

## Copy one program into your own project

1. Open the program's `App.jsx` link above on GitHub. Use **Raw** or the copy button to copy the entire file.
2. Replace all the contents of your React project's **`src/App.jsx`** with that code. Keep your existing **`src/main.jsx`**, which renders `<App />`.
3. For program 10, also create **`src/StyledComponent.css`** and paste the linked CSS into it. Keep it next to `App.jsx` so its import works.
4. Run `npm install` if dependencies are not installed, then `npm run dev`.

Hinglish: jis program ko chalana hai, uska poora `App.jsx` copy karke apne `src/App.jsx` mein paste karo. `main.jsx` ko replace mat karo. Sirf program 10 mein CSS file bhi copy karni hai.

Programs 4–9 use inline styles and do not import `App.css`. If your existing Vite template applies a dark background or centers everything, clear its starter `src/index.css` or use this minimal baseline:

```css
body { margin: 0; font-family: Arial, sans-serif; background: white; color: #1f2937; }
```

The manual splits some examples into `App.jsx` and a child component. Here those components live in the same file to make copying easier. The lifecycle example still uses `constructor`, `render`, `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. TODO styling is included inline, as the manual references a CSS file without providing its contents.

## Run this collection

Use a Node.js version compatible with the included Vite version (Node 22.12+ or Node 24).

```bash
cd exp
npm install
npm run dev
```

If your terminal is already inside `exp`, skip `cd exp`. Open the local URL printed by Vite and choose a program from the dropdown. Switching programs resets their state. Tasks and login state are in memory and reset on refresh; the login example demonstrates conditional rendering only.

To start a separate React project instead:

```bash
npm create vite@latest my-react-lab -- --template react
cd my-react-lab
npm install
npm run dev
```

Then follow the copy steps above.

## Check the code

```bash
npm run lint
npm run build
```

For program 7, open browser developer tools → Console. Increment the child count to see `componentDidUpdate`; destroy and recreate it to see unmounting and mounting. React Strict Mode can repeat lifecycle logs during development; this is expected. A remounted child starts at count 0.

## Upload to GitHub

Upload the complete `exp` folder contents, including `programs/`, `src/`, `public/`, `package.json`, `package-lock.json`, `index.html`, configuration files, and this README. Keep `.gitignore`; do not upload `node_modules/` or `dist/`.

If you use `exp` as the GitHub repository root, the program links in this README work directly. If you upload the parent folder, open `exp/README.md` to browse the programs. Each program folder is a copyable example, not a separate npm project; run the collection from the folder containing `package.json`.
