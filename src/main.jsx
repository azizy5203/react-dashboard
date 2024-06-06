import ReactDOM from "react-dom/client";
import { PrimeReactProvider } from "primereact/api";
import "./index.css";
import "primereact/resources/themes/lara-dark-cyan/theme.css"; // Theme CSS
import "primereact/resources/primereact.min.css"; // Core CSS
import "primeicons/primeicons.css"; // Prime Icons
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
);
