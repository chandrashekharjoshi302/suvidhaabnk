import React from "react";

import { createRoot } from 'react-dom/client';
import App from "./App";
import { DarkModeContextProvider } from "./context/darkModeContext";


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

