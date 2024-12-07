import { aoc23d01p1, aoc23d01p2 } from "./src/23d01";

const main = async () => {
  const s = process.hrtime();
  await aoc23d01p1();
  await aoc23d01p2();
  const e = process.hrtime(s);
  console.log(`Time: ${e[0]}s ${(e[1] / 1e6).toFixed(2)}ms`);
};

main();
