import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import CodeLibraryProvider from "./components/codeLibraryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CodeLibraryProvider>
      <App />
    </CodeLibraryProvider>
  </StrictMode>,
);
