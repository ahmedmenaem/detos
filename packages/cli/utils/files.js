const { existsSync, readFileSync } = require("fs");
const mkdirp = require("mkdirp");

const files = {};

files.mkdir = dir => {
  mkdirp.sync(dir);
};

files.isExist = dir => {
  return existsSync(dir);
};

files.readFile = dir => {
  return readFileSync(dir, "utf-8");
};

module.exports = files;
