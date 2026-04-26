import { promisify } from "util";
import childProcess from "child_process";

export const runCommand = async (command: string) => {
  const exec = promisify(childProcess.exec);

  try {
    const { stdout, stderr } = await exec(command);
    console.log(stdout);
    if (stderr) console.error(stderr);
  } catch (error) {
    console.error("Command failed:", error);
  }
};
