// import { Button } from "primereact/button";
import { BrowserRouter as Router } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    // <div className="p-4 bg-sky-200 border border-red-400 w-3/4 mx-auto mt-4">
    //   <h1 className="text-3xl">Prime Nigga</h1>
    //   <Button
    //     label="Nigga clicker"
    //     icon="pi pi-search"
    //     className="border border-red-700"
    //   />
    // </div>
    <Router>
      <DefaultLayout />
    </Router>
  );
}

export default App;
