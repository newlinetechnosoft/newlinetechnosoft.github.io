import { readFileSync } from "node:fs";

let dataUri: string | undefined;

export function logoDataUri(): string {
  dataUri ??= `data:image/webp;base64,${readFileSync(
    new URL("../../src/assets/logos/logo.webp", import.meta.url),
  ).toString("base64")}`;

  return dataUri;
}
