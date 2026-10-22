# Codes

V Semester BCA — Frontend React Lab

Har React program ab apna independent project hai. Repo clone karo, pasand ke program folder mein jao aur run karo. Baaki program folders delete kar sakte ho.

## Clone aur run — Counter example

```bash
git clone https://github.com/Kaushik9560/Codes.git
cd Codes/exp/programs/05-counter
npm install
npm run dev
```

Vite ka Local URL browser mein kholo. Node.js 22.12+ ya Node 24 installed hona chahiye. Agar repo pehle se clone hai to uski root se `git pull` karo, phir desired project folder mein jao.

## Apna project chuno

Counter ke badle neeche diye folder mein jaakar `npm install` aur `npm run dev` chalao. Har folder ka apna README hai.

| Program | Independent project |
| --- | --- |
| 4. Welcome / JSX | [04-welcome-jsx](exp/programs/04-welcome-jsx/README.md) |
| 5. Counter | [05-counter](exp/programs/05-counter/README.md) |
| 6. Login / Logout | [06-login-logout](exp/programs/06-login-logout/README.md) |
| 7. Component lifecycle | [07-component-lifecycle](exp/programs/07-component-lifecycle/README.md) |
| 8. TODO list | [08-todo-list](exp/programs/08-todo-list/README.md) |
| 9. Colour changer | [09-colour-changer](exp/programs/09-colour-changer/README.md) |
| 10. External CSS | [10-external-css](exp/programs/10-external-css/README.md) |

## Sirf ek project rakhna hai

Jis program ki zarurat hai, uska **poora folder** rakho; us folder ke bahar ke baaki programs delete kar sakte ho. Selected folder ko repo se bahar copy/move karke bhi `npm install` aur `npm run dev` se chala sakte ho. Is folder ke andar ki project files saath rakho. Kisi doosre program ya parent `exp/package.json` ki dependency nahi hai.

## App.jsx copy karna hai

- [Browse the seven programs and copy instructions](exp/README.md#programs)
- [Copyable program files](exp/programs/)

Programs 4–9 each need only their `App.jsx` copied into your own `src/App.jsx`. Program 10 also needs `StyledComponent.css` because it demonstrates external CSS. Keep your project's `src/main.jsx`.

## Sabhi programs ka combined preview

Poore collection ke dropdown preview ke liye saare program folders rakho. Repo root se:

```bash
cd exp
npm install
npm run dev
```

See the [full README](exp/README.md) for expected results and validation commands. Har project ki `.gitignore` file `node_modules/` aur `dist/` ko GitHub se exclude karti hai.
