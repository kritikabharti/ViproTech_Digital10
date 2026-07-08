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

import Dashboard from "./admin/Dashboard";
import AddBlog from "./admin/AddBlog";
import BlogList from "./admin/BlogList";
import EditBlog from "./admin/EditBlog";

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

<Route path="/admin" element={<Dashboard />} />

<Route path="/admin/add-blog" element={<AddBlog />} />

<Route path="/admin/blogs" element={<BlogList />} />

<Route path="/admin/edit-blog/:id" element={<EditBlog />} />



       

      </Routes>
    </BrowserRouter>
  );
}

export default App;