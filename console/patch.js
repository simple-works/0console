///==============================================================================
// ■ Console-Patch (console/patch.js)
//------------------------------------------------------------------------------
//     Overwrites console with new and modified functions.
//==============================================================================
const $console = require("./");

///------------------------------------------------------------------------------
// ► Exports
//------------------------------------------------------------------------------
module.exports = function consolePatch() {
  console.$log = console.log;
  console.$info = console.info;
  console.$warn = console.warn;
  console.$error = console.error;
  console.$clear = console.clear;
  console.log = $console.log;
  console.info = $console.info;
  console.warn = $console.warn;
  console.error = $console.error;
  console.clear = $console.clear;
  console.success = $console.success;
  console.line = $console.line;
};
