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
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import AddBlog from "./pages/AddBlog";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import BlogDetail from "./pages/BlogDetail";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <CustomCursor />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog/:id" element={<BlogDetail />} />


          
          {/* Protected Admin Routes */}
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute adminOnly>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/add-blog" 
            element={
              <ProtectedRoute adminOnly>
                <AddBlog />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/edit-blog/:id" 
            element={
              <ProtectedRoute adminOnly>
                <AddBlog />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;