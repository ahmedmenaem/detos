const { isExist } = require("../utils").files;
const touch = require("touch");
const { writeFileSync } = require("fs");

module.exports = (name = "") => {
  const detosPath = `${process.cwd()}/detos.json`;
  if (!isExist(detosPath)) {
    touch.sync("detos.json");
  }
  writeFileSync(
    "detos.json",
    JSON.stringify(
      {
        name,
        vars: {},
        pipeline: {
          stages: [
            {
              name: "default-stage",
              scripts: [
                {
                  name: "default-script",
                  run: 'echo "Hello from detos!"'
                }
              ]
            }
          ]
        }
      },
      null,
      3
    )
  );
};
