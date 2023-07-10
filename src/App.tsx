import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Joins } from "./views/Join";
import { Discover } from "./views/Discover";
import { HomePage } from "./views/HomePage";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Joins />} />
        </Routes>
      </Router>
    </>
  );
}

export { App };
