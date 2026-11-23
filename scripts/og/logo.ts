import { readFileSync } from "node:fs";

let dataUri: string | undefined;

export function logoDataUri(): string {
  dataUri ??= `data:image/svg+xml;base64,${readFileSync(
    new URL("../../src/assets/logos/newline.svg", import.meta.url),
  ).toString("base64")}`;

  return dataUri;
}
