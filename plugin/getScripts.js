import fs from "fs";

export function getScripts() {
  const jsFiles = fs
    .readdirSync("/public/js")
    .filter((file) => file.endsWith(".js"))
    .map((file) => `<script src='/js/${file}'></script>`);
  return jsFiles.join("\n");
}
