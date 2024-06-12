// import { Button } from "primereact/button";
import { BrowserRouter as Router } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import DefaultLayout from "./layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <DefaultLayout />
      </Router>
      <ToastContainer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
