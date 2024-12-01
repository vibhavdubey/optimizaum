import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContextProvider from "./context/MyContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </BrowserRouter>
);
