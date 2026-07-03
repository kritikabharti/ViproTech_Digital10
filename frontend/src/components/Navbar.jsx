import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/imagesss.png";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

        {/* Navigation */}
       <ul
  style={{
    ...styles.navLinks,
    ...(menuOpen ? styles.mobileMenuOpen : {}),
  }}
>
  <li>
    <NavLink
      to="/register"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
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

  <li>
    <NavLink
      to="/services"
      className={({ isActive }) =>
        isActive ? "nav-link active" : "nav-link"
      }
    >
      Services
    </NavLink>
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

        {/* Right Side */}
        <div style={styles.rightSide}>
          {/* <button style={styles.language}>🌐 EN</button> */}

          <button style={styles.button}>
            Get Consultation
          </button>

          <div
            style={styles.mobileIcon}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </div>
        </div>
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
  background: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
  backdropFilter: "blur(10px)",      // Optional glass effect
  WebkitBackdropFilter: "blur(10px)", // Safari support
  transition: "0.35s",
  zIndex: 1000,
  padding: "18px 0",
},

  navbarScrolled: {
   background: "rgba(0, 0, 0, 0.5)", // Black with 50% transparency
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

navLink: {
  textDecoration: "none",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "600",
  padding: "8px 0",
  transition: "all 0.3s ease",
},


navLinks: {
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  gap: "35px",
  margin: 0,
  padding: 0,
},

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