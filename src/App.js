import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from "./containers/errors/Error404";
import Home from "./containers/pages/Home";
import About from "./containers/pages/About";
import Database from "./containers/pages/Database";
import Encrypt from "./containers/pages/Encrypt";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/database" element={<Database />} />
          <Route path="/encrypt" element={<Encrypt />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
