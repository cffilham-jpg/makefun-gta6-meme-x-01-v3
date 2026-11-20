// gta6-meme-x-01 v3 entrypoint (Node 22, stdlib only).
// Reads POST.json from the bot directory, validates that it names a real
// X post address, and copies the raw bytes to the output directory.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? ".";
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+$/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const raw = readFileSync(join(BOT_DIR, "POST.json"));

// The gate refuses a POST.json over 16,384 bytes; fail fast instead.
const MAX_POST_BYTES = 16384;
if (raw.length > MAX_POST_BYTES) {
  fail(`POST.json is ${raw.length} bytes, over the ${MAX_POST_BYTES}-byte cap`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch {
  fail("POST.json is not valid JSON");
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("POST.json must be a JSON object");
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || !POST_URL.test(url)) {
  fail(
    "POST.json url must be an X post address (https://x.com/<handle>/status/<digits>)",
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "POST.json"), raw);
