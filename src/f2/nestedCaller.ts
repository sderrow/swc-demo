import { nestedFunc } from "../f1/nestedfunc";

export const nestedCaller = () => {
  nestedFunc();
  console.log("nestedCaller");
};
