import prompts from "prompts";
import { ENV } from "#core/constants/index.js";
import { dbServer } from "#core/servers/index.js";

console.log("Connecting to database...");
await dbServer.connect(ENV.MONGODB_URL);

let exit = false;

while (!exit) {
  const { consoleRunner } = await prompts({
    name: "consoleRunner",
    type: "select",
    message: "Which console-runner do you want to run?",
    choices: ["seed-data", "exit"].map((option) => ({
      title: option,
      value: option,
    })),
  });

  if (consoleRunner !== "exit") {
    try {
      const module = await import(`./${consoleRunner}.runner.ts`);
      await module.run();
    } catch (error) {
      console.error("Error loading runner:", error);
    }
  } else {
    exit = true;
    console.log("Bye!");
  }
}
