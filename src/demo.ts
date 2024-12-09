import { readFile } from "fs/promises";
import { DateTime } from "luxon";

export const runDemo = async () => {
  const text = await readFile("./input/test.txt", "utf-8");
  const lines = text.trim().split("\n");
  for (const line of lines) {
    console.log(`${DateTime.now().toISO()}: ${line}`);
  }
};
