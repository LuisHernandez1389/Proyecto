import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.css";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.render(
  <React.StrictMode>
    <PayPalScriptProvider       options={{
        "client-id": "AerU-IZS8uK489Tv17mhKMfA40rXnaW-hZYQhuhrTV3iMDEYdyEMIEXWq1khujYRADT8VSH6okGv9dWB"
      }}
      deferLoading={true}
      scriptId={"paypal-sdk"}
      onInit={() => console.log("PayPal script loaded")}>
    <Auth0Provider
      domain="dev-5huiww2qxzush6kt.us.auth0.com"
      clientId="4952WTodwHAYzZcgXQuicZsI0ELwOZiY"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
    </PayPalScriptProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
