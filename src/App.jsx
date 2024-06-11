// import { Button } from "primereact/button";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <DefaultLayout />
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
