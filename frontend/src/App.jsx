import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import CustomCursor from "./components/CustomCursor";
import Blogs from "./pages/Blogs";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

import AdminDashboard from "./pages/AdminDashboard";
import AddBlog from "./pages/AddBlog";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
 <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      
       <Route path="/register" element={<Register />} />
       
               

<Route path="/blogs" element={<Blogs />} />
<Route path="/careers" element={<Careers />} />
<Route path="/contact" element={<Contact />} />




<Route
  path="/admin"
  element={
    // <ProtectedRoute>
      <AdminDashboard />
   // </ProtectedRoute>
  }
/>

<Route
  path="/admin/add-blog"
  element={
    //<ProtectedRoute>
      <AddBlog />
    //</ProtectedRoute>
  }
/>

       

      </Routes>
    </BrowserRouter>
  );
}

export default App;