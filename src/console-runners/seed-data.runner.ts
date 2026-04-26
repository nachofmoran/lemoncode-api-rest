import prompts from "prompts";
import { runCommand } from "./console-runners.helpers.js";
import { ENV } from "#core/constants/index.js";
import os from "os";

export const run = async () => {
  const { dbName, dumpPath } = await prompts([
    {
      name: "dbName",
      initial: "airbnb",
      type: "text",
      message: "Database name:",
    },
    {
      name: "dumpPath",
      type: "text",
      message: "Path to dump folder:",
    },
  ]);

  // expandir ~ correctamente
  const resolvedPath = dumpPath.replace("~", os.homedir());

  const command = `mongorestore --uri="${ENV.MONGODB_URL}" --drop "${resolvedPath}"`;

  console.log("Running command:");
  console.log(command);

  await runCommand(command);
};
