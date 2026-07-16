import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
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
import ScrollToTop from './components/ScrollToTop';
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerificationRequired from "./components/VerificationRequired";
import Loader from "./components/Loader";
import WebDevelopment from './pages/WebDevelopment';
import AndroidDevelopment from './pages/AndroidDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import LogoDesigning from './pages/LogoDesigning';
import WebsiteDesign from './pages/WebsiteDesign';
import InteriorDesigning from './pages/InteriorDesigning';
import DomainsCourses from './pages/DomainsCourses';

function App() {
  const [loading,setLoading]=useState(true);

useEffect(()=>{

const timer=setTimeout(()=>{
setLoading(false);
},1800);

return()=>clearTimeout(timer);

},[]);

if(loading){
return <Loader/>
}


  return (
    <BrowserRouter>
     <ScrollToTop />
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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path="/verify-email/:token" element={<VerifyEmail />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/mobile-apps" element={<AndroidDevelopment />} />
           <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/logo-designing" element={<LogoDesigning />} />
          <Route path="/website-design" element={<WebsiteDesign />} />
          <Route path="/interior-designing" element={<InteriorDesigning />} />
          <Route path="/courses" element={<DomainsCourses />} />
          
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