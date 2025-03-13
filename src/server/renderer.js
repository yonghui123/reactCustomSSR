import React from "react";
import { renderToString } from "react-dom/server";
import APP from "./App";
import { getScripts } from "../../plugin/getScripts";
export const render = (req, res) => {
  let home = renderToString(<APP />);
  let scripts = getScripts();
  let html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SSR</title>
  </head>
  <body>
    ${home}
    ${scripts}
  </body>
  </html>
  `;
  res.send(html);
};
