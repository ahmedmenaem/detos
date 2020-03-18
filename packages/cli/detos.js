const commands = require("./commands");

const start = async () => {
  const args = process.argv.slice(2);
  switch (args[0]) {
    case "init":
    case "i":
      const name = args.includes("--name")
        ? args[args.indexOf("--name") + 1]
        : "detos-project";
      commands.init(name);
      break;
    case "exec":
      commands.exec();
      break;
    case "help":
      commands.help();
      break;
    default:
      commands.help();
      break;
  }
};

module.exports = {
  start
};
