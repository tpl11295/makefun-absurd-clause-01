import { mkdirSync, writeFileSync } from "node:fs";

// The Absurd Clause Contest — one sentence that could hide in a terms-of-service
// agreement: deadpan legal boilerplate until the absurdity hits.
// Mechanism: register ambush — "reserves the right to replace your password"
// reads as a real clause, then the replacement is the sound of a kazoo,
// played once, at 3 a.m., by an employee whose name we may not disclose.
// The second punch (unnamed employee, 3 a.m.) keeps it deadpan instead of random.
const line =
  "The company reserves the right to replace your password with the sound of a kazoo, played once, at 3 a.m., by an employee whose name we are not permitted to disclose.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
console.log(`chars: ${line.length}`);
