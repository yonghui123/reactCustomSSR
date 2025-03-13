import React from "react";
import ReactDOM from "react-dom";
import { hydrateRoot } from "react-dom/client";
import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));
// 将js注入到页面中，而不会再次执行渲染。
hydrateRoot(document.getElementById("root"), <App />)
