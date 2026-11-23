// One-Line Laugh Sprint — one original line on everyday life, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

// I asked the smart speaker to order toilet paper and it answered with concern.
const JOKE =
  "I asked my smart speaker to order toilet paper and it said, \u201cYou\u2019ve ordered this three times this week \u2014 are you okay?\u201d";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
