import express from "express";
import { render } from "./renderer";
const app = express();

app.use(express.static("./public"));

app.get("*", render);

app.listen(8080, () => {
  console.log("server is running at http://localhost:8080");
});
