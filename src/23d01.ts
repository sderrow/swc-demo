import { readFile } from "fs/promises";

const parseWord: Record<string, number> = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};

const solve23e01 = async (r: RegExp) => {
  const text = await readFile("./input/23d01_input.txt", "utf-8");
  const lines = text.trim().split("\n");
  let ans = 0;
  for (const line of lines) {
    const matches = [...line.matchAll(r)].map((m) => m[1]);
    const a = matches.at(0)!;
    const b = matches.at(-1)!;
    const fa = parseWord[a] || Number(a);
    const fb = parseWord[b] || Number(b);
    const n = fa * 10 + fb;
    ans += n;
  }
  return ans;
};

export const aoc23d01p1 = async () => {
  const ans = await solve23e01(/(\d)/g);
  console.log(`AoC 2023, Day 1, Part 1 Answer: ${ans}`);
};

export const aoc23d01p2 = async () => {
  const ans = await solve23e01(
    /(?=(\d|one|two|three|four|five|six|seven|eight|nine|zero))/g,
  );
  console.log(`AoC 2023, Day 1, Part 2 Answer: ${ans}`);
};
