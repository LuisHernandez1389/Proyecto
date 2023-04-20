import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-5huiww2qxzush6kt.us.auth0.com"
      clientId="4952WTodwHAYzZcgXQuicZsI0ELwOZiY"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
