#!/usr/bin/env node

const { start } = require("./detos");
if (require.main === module) {
  start();
} else {
  module.exports = start;
}
