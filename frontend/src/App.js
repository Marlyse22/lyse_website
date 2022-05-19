
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import 'bulma/css/bulma.css';

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import Technos from "./pages/Technos";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route excact path="/" element={<Home />} />
          <Route excact path="Contact" element={<Contact />} />
          <Route excact path="Parcours" element={<Parcours />} />
          <Route excact path="Projets" element={<Projets />} />
          <Route excact path="Technos" elem ent={<Technos />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;