const { isExist, readFile } = require("../utils").files;
const { execSync } = require("child_process");

module.exports = async () => {
  const prepareToScriptToRun = (script, vars) => {
    let s = script;
    for (let variable in vars) {
      s = s.split(`$${variable}`).join(vars[variable]);
    }
    return s;
  };

  const detosPath = `${process.cwd()}/detos.json`;

  if (isExist(detosPath)) {
    // read detos config file
    try {
      const { name, pipeline, vars } = JSON.parse(readFile(detosPath));
      console.log(`[PIPLINE] start ${name} execution!`);
      const { stages } = pipeline;
      stages.forEach(({ scripts, name }) => {
        console.log(`[STAGE] ${name} stage!`);

        scripts.forEach(({ name, run }) => {
          const scriptToRun = prepareToScriptToRun(run, vars);
          console.log(scriptToRun);
          //   const scriptToRun = run.split('$')
          console.log(`[SCRIPT] ${name} script`);
          execSync(scriptToRun, { stdio: "inherit" });
        });
      });
    } catch (ex) {
      console.error(ex);
    }
    return;
  }
  console.log("current dir not seems to be a detos project");
};
