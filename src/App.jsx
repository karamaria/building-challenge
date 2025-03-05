import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BonusPage from "./pages/BonusPage"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bonus" element={<BonusPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;