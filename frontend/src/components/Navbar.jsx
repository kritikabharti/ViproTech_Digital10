// Navbar.jsx
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
  const [isAdmin, setIsAdmin] = useState(false);

  // Check if user is logged in and is admin
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    // Check if user is admin
    if (token && user?.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


   // Handle body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  // ✅ Function to close menu
  const closeMenu = () => {
    setMenuOpen(false);
  };


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAdmin(false);
    window.location.href = "/";
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isSuperAdmin = user?.role === "superadmin" || user?.role === "admin";

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
          <img src={logo} alt="VProTech Digital" style={styles.logo} />
        </Link>
        

          {/* Hamburger Menu Icon */}
          <button
            className="mobile-menu-icon"
           onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          {/* Admin Links - Only visible to Admin */}
          {isSuperAdmin && (
            <>
              <li>
                <NavLink
                  to="/admin"
                  
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  AdminDashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/add-blog"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Add Blog
                </NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `nav-link blink-link ${isActive ? "active" : ""}`
              }
               onClick={closeMenu} 
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
               onClick={closeMenu} 
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
               onClick={closeMenu} 
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
               onClick={closeMenu} 
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
               onClick={closeMenu} 
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
               onClick={closeMenu} 
            >
              Contact
            </NavLink>
          </li>

          {/* Logout Button - Only visible when logged in */}
          {isSuperAdmin && (
            <li>
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </li>
          )}
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
    overflow: "visible",
    zIndex: 1000,
  },

  navbarScrolled: {
    background: "rgba(246, 227, 227, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
    padding: "14px 0",
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
};