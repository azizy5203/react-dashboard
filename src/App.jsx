// import { Button } from "primereact/button";
import { RouterProvider } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ProgressSpinner } from "primereact/progressspinner";
import router from "./router";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <RouterProvider
        fallbackElement={<ProgressSpinner color="#f00" />}
        router={router}
      />
      <ToastContainer />
      <SpeedInsights />
      <Analytics />
    </>
  );
}

export default App;
