import { DateTime } from "luxon";
import { runDemo } from "./demo";

const s = process.hrtime();
await runDemo();
const e = process.hrtime(s);
console.log(`Time: ${e[0]}s ${(e[1] / 1e6).toFixed(2)}ms`);
console.log(`Done at ${DateTime.now().toISO()}`);
