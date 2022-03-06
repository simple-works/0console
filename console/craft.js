///==============================================================================
// ■ Console-Craft (console/craft.js)
//------------------------------------------------------------------------------
//     Crafts a patched version of the given console function.
//==============================================================================
const chalk = require("chalk");

//------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = function consoleCraft(fn, options = {}) {
  const { prefix = {}, highlight = {}, normal = {} } = options;
  if (!prefix.text) prefix.text = " ";
  if (!prefix.color) prefix.color = "white";
  if (!prefix.bgColor) prefix.bgColor = "bgGrey";
  if (!highlight.color) highlight.color = "white";
  if (!highlight.bgColor) highlight.bgColor = "bgGrey";
  if (!normal.color) normal.color = "white";
  return function () {
    for (let i = 0, length = arguments.length; i < length; i++) {
      if (i === 0 && length >= 2) {
        arguments[i] = chalk[highlight.bgColor][highlight.color](
          ` ${arguments[i].toString()} `
        );
        continue;
      }
      arguments[i] = chalk[normal.color](arguments[i].toString());
    }
    fn(chalk[prefix.bgColor][prefix.color](` ${prefix.text} `), ...arguments);
  };
};
