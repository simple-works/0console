# ✒️ 0console

[![NPM version](https://badge.fury.io/js/0console.svg)](https://npmjs.org/package/0console)

Simple patched console functions with improved output.

![Screenshot](./screenshot.jpg?raw=true)

# 📥 Install

```
npm i 0console
```

# 🏁 Use

With patched console object:

```js
require("0console").patch();

console.log("Hello World!");
console.log("Highlighted", "Hello World!");
```

Without patching the console object:

```js
const $console = require("0console");

$console.log("Hello World!");
$console.log("Highlighted", "Hello World!");
```

# ⚙️ Functions

- `console.log(...args)` : Writes a normal message.
- `console.info(...args)` : Writes an information message.
- `console.warn(...args)` : Writes a warning message.
- `console.error(...args)` : Writes an error message.
- `console.clear(...args)` : Clears the output (Unlike the original).
- 🆕 `console.success(...args)` : Writes a success message.
- 🆕 `console.line(char?, color?, count?)` : Writes an horizontal line.
  - `char` : text to repeat (one character).
  - `color` : text color in the console (Using [Chalk](https://github.com/chalk/chalk)).
  - `count` : times to repeat `char` (Length of the line).

💡 If a logging function (log, info, warn, error, success) has more than one argument, the text of the first argument will be highlighted in the console.

# ⚙️ Craft Function

You can craft your own custom function:

```js
const $console = require("0console");

const newConsoleInfo = $console.craft(console.info, {
  prefix: { text: "?", color: "cyanBright", bgColor: "bgBlueBright" },
  highlight: { color: "blueBright" },
  normal: { color: "blueBright" },
});
```

- `console.craft(fn, options?)` : Crafts a patched version of the given console function.
  - `fn` : Console function to craft from.
  - `options` : Options object.
    - `prefix` : Object describing the prefix text.
      - `text`: Text of the prefix.
      - `color`: Color of the prefix.
      - `bgColor`: Background color of the prefix.
    - `highlight` : Object describing the highlighted text of the first argument.
      - `color`: Color of the highlighted text.
    - `normal` :  Object describing the normal text.
      - `color`: Color of the normal text.

# 📃 License
[MIT](./LICENSE) © [Ambratolm](https://github.com/Ambratolm)