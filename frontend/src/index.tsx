import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { api } from "./proxy/trpc";

api.ping.query().then(console.log);

const App: React.FC = () => {
  return <h1>Hello world</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
