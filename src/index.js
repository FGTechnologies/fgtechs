import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./raw.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RootProvider } from "./context";
import { AppInsightsErrorBoundary } from "@microsoft/applicationinsights-react-js";
import { reactPlugin } from "./utils/AppInsights/AppInsights";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppInsightsErrorBoundary onError={() => <h1>I believe something went wrong</h1>} appInsights={reactPlugin}>
    <React.StrictMode>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RootProvider>
          <App />
        </RootProvider>
      </BrowserRouter>
    </React.StrictMode>
  </AppInsightsErrorBoundary>

);
