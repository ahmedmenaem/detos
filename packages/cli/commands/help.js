const commandLineUsage = require("command-line-usage");
const { log } = console;

module.exports = () => {
  const sections = [
    {
      header: "Detos",
      content: "Automation done easy!"
    },
    {
      header: "Synopsis",
      content: "$ detos <command> <options>"
    },
    {
      header: "Commands",
      content: [
        {
          name: "init",
          description: "Initialize a new detos project!"
        },
        {
          name: "version",
          description: "Show detos current version!"
        },
        {
          name: "help",
          description: "Show detos help!"
        }
      ]
    },
    {
      header: "Options",
      optionList: [
        {
          name: "name",
          description: "Choose detos project name!"
        }
      ]
    }
  ];
  log(commandLineUsage(sections));
};
