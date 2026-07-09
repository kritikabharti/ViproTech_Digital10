import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/imagesss.png";
import { FiMenu, FiX } from "react-icons/fi";
import { serviceDomains } from "../data/servicesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [showMegaMenu, setShowMegaMenu] = useState(false);
const [showDropdown, setShowDropdown] = useState(false);
const [selectedDomain, setSelectedDomain] = useState(serviceDomains[0]);

const user = JSON.parse(localStorage.getItem("user") || "{}");

const isSuperAdmin = user?.role === "superadmin";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

    
    <nav
      style={{
        ...styles.navbar,
        ...(scrolled ? styles.navbarScrolled : {}),
      }}
    >
      <div style={styles.container}>
        {/* Logo */}
       <Link to="/">
  <img
    src={logo}
    alt="VProTech Digital"
    style={styles.logo}
  />
</Link>

<div
  className="mobile-menu-icon"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</div>

        {/* Navigation */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

     {/* {isSuperAdmin && (
<> */}
<li>
  <NavLink
    to="/admin"
    className="nav-link"
  >
    AdminDashboard
  </NavLink>
</li>

<li>
  <NavLink
    to="/admin/add-blog"
    className="nav-link"
  >
    Add Blog
  </NavLink>
</li>

{/* </> */}
{/* )} */}

  <li>
   <NavLink
  to="/register"
  className={({ isActive }) =>
    `nav-link blink-link ${isActive ? "active" : ""}`
  }
>
  Register For Internship
</NavLink>
  </li>

  <li>
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Home
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/about"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      About
    </NavLink>
  </li>

 <li
  className="services-wrapper"
  onMouseEnter={() => setShowMegaMenu(true)}
  onMouseLeave={() => setShowMegaMenu(false)}
>

  <span
  className={`nav-link ${showMegaMenu ? "active" : ""}`}
>
  Services
</span>

  {showMegaMenu && (
    
   <div className="mega-menu">

  {/* LEFT COLUMN */}
  <div className="mega-column domains">

    <h3 className="mega-heading">Domains</h3>

    {serviceDomains.map((domain) => (
      <div
        key={domain.id}
        className={`domain-item ${
          selectedDomain.id === domain.id ? "active-domain" : ""
        }`}
        onMouseEnter={() => setSelectedDomain(domain)}
      >
        <span>{domain.name}</span>

        <span>›</span>
      </div>
    ))}

  </div>

  {/* MIDDLE COLUMN */}

  <div className="mega-column">

    <h3 className="mega-heading">
      Courses
    </h3>

    {selectedDomain.courses.map((course, index) => (
      <div
        key={index}
        className="mega-item"
      >
        {course}
      </div>
    ))}

  </div>

  {/* RIGHT COLUMN */}

  <div className="mega-column">

    <h3 className="mega-heading">
      Industries
    </h3>

    {selectedDomain.industries.map((industry, index) => (
      <div
        key={index}
        className="mega-item"
      >
        {industry}
      </div>
    ))}

  </div>

</div>
  )}

</li>

  <li>
    <NavLink
      to="/blogs"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Blogs
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/careers"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Careers
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/contact"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Contact
    </NavLink>
  </li>
</ul>

       
      </div>
    </nav>
  );
}

const styles = {
 navbar: {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "90px",
  background: "rgba(246, 227, 227, 0.5)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  overflow: "visible",   // <-- Add this
  zIndex: 1000,

},

  navbarScrolled: {
   background: "rgba(246, 227, 227, 0.5)", // Black with 50% transparency
  backdropFilter: "blur(10px)",      // Optional glass effect
  WebkitBackdropFilter: "blur(10px)",
  boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
  padding: "14px 0",
  backdropFilter: "blur(10px)",
},

  container: {
    width: "92%",
    maxWidth: "1400px",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    width: "100px",
    height: "60px",
    cursor: "pointer",
  },

  logoHighlight: {
    color: "#0b478b",
  },

// navLink: {
//   textDecoration: "none",
//   color: "#fff",
//   fontSize: "16px",
//   fontWeight: "600",
//   padding: "8px 0",
//   transition: "all 0.3s ease",
// },


// navLinks: {
//   display: "flex",
//   alignItems: "center",
//   listStyle: "none",
//  gap: "22px",
// flexWrap: "wrap",
//   margin: 0,
//   padding: 0,
// },

  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },

  rightSide: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
  },

  language: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },

  button: {
    background: "#4F46E5",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    padding: "12px 26px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "15px",
  },

  mobileIcon: {
    display: "none", // Handle responsiveness with media queries if needed
    cursor: "pointer",
  },

  mobileMenuOpen: {
    display: "flex",
  },

  
};