import { BrowserRouter } from "react-router-dom";

import Routers from "./components/Routers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="site-container relative">
      <BrowserRouter>
        <Navbar />
        <Routers />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
