import "./App.css";
import BirthCertificateForm from "./components/BirthCertificateForm";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
        </Routes>
        <Routes>
          <Route
            path="/create-birth-certificate"
            exact
            element={<BirthCertificateForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
