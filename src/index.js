import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "app/store";
import App from "./App";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
