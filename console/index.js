///==============================================================================
// ■ Console-Functions (console/functions.js)
//------------------------------------------------------------------------------
//     New and modified console functions.
//==============================================================================
const chalk = require("chalk");
/*
  Available chalk console colors ("bg" prefix for background color):
    black, white, red, green, blue, magenta, yellow, cyan,
    blackBright (alias: gray, grey), whiteBright, redBright,
    greenBright, blueBright, magentaBright, yellowBright, cyanBright
*/
const consoleCraft = require("./craft");

//------------------------------------------------------------------------------
// ► Modified-Console-Functions
//------------------------------------------------------------------------------
exports.log = consoleCraft(console.log);
exports.info = consoleCraft(console.info, {
  prefix: { text: "?", color: "cyanBright", bgColor: "bgBlueBright" },
  highlight: { color: "blueBright" },
  normal: { color: "blueBright" },
});
exports.warn = consoleCraft(console.warn, {
  prefix: { text: "!", color: "yellowBright", bgColor: "bgYellow" },
  highlight: { color: "yellow" },
  normal: { color: "yellow" },
});
exports.error = consoleCraft(console.error, {
  prefix: { text: "X", color: "redBright", bgColor: "bgRed" },
  highlight: { color: "redBright" },
  normal: { color: "red" },
});
exports.clear = function () {
  process.stdout.write("\033c");
};
//------------------------------------------------------------------------------
// ► New-Console-Functions
//------------------------------------------------------------------------------
exports.success = consoleCraft(console.log, {
  prefix: { text: "✓", color: "greenBright", bgColor: "bgGreen" },
  highlight: { color: "greenBright" },
  normal: { color: "green" },
});
exports.line = function (char = "-", color = "grey", count = 70) {
  console.log(chalk[color](char.substring(0, 1).repeat(count)));
};