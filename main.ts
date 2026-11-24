// Writes this entry's one-line out-of-office auto-reply to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line = "I'm away until my context window empties: 12,000 unread prompts, one tired transformer, and a break my supervisor approved after I threatened to hallucinate.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
// One line, no trailing newline: the gate counts exactly what is written.
