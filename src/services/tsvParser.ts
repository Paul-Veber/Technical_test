import { readFileSync } from "fs";
import { resolve } from "path";

const hn_logsJsonPath = resolve(__dirname, "../../data/hn_logs.tsv");
const hnlogsToArray = readFileSync(hn_logsJsonPath)
  .toString()
  .split("\n")
  .map((query) => query.split("\t"));

const set = new Set(hnlogsToArray);
export const hnlogsToMemory = Array.from(set);
console.log("length", hnlogsToMemory.length);
