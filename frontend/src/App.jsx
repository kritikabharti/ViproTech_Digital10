import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
 <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
     
               <Route path="/register" element={<Register />} />


       

      </Routes>
    </BrowserRouter>
  );
}

export default App;