import fs from "fs";
import path from "path";
import chalk from "chalk";
import boxen from "boxen";

export const initializeProject = async (): Promise<void> => {
 const targetDir = path.join(process.cwd(), "scripts");
 const exampleFile = path.join(targetDir, "hello-world.ts");

 console.log(chalk.blue("⚙️  Initializing Script Runner..."));

 // 1. Create directory if it doesn't exist
 if (!fs.existsSync(targetDir)) {
  try {
   fs.mkdirSync(targetDir, { recursive: true });
   console.log(chalk.green(`✓ Created directory: ${chalk.bold("./scripts")}`));
  } catch (error) {
   console.error(
    chalk.red(`❌ Failed to create directory: ${(error as Error).message}`),
   );
   process.exit(1);
  }
 } else {
  console.log(chalk.gray(`ℹ️  Directory ./scripts already exists`));
 }

 // 2. Create example script if directory is empty or file doesn't exist
 if (!fs.existsSync(exampleFile)) {
  const fileContent = `
/**
 * Example script for @alicercedigital/runner
 * Run this with: bun runner -s hello-world
 */
import { styleText } from "util";

console.log("\\n👋 " + styleText("green", "Hello World!"));
console.log("   This script is running via Bun version: " + Bun.version + "\\n");
`;

  try {
   fs.writeFileSync(exampleFile, fileContent.trim());
   console.log(
    chalk.green(`✓ Created example script: ${chalk.bold("hello-world.ts")}`),
   );
  } catch (error) {
   console.error(
    chalk.red(`❌ Failed to create file: ${(error as Error).message}`),
   );
   process.exit(1);
  }
 } else {
  console.log(chalk.gray(`ℹ️  Example script already exists`));
 }

 // 3. Success Message
 console.log(
  boxen(
   `${chalk.bold.green("Setup Complete!")}\n\n` +
    `Try it now:\n` +
    `${chalk.cyan("bun runner")}        ${chalk.dim("(Interactive mode)")}\n` +
    `${chalk.cyan("bun runner -l")}     ${chalk.dim("(List scripts)")}`,
   {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
   },
  ),
 );
};
