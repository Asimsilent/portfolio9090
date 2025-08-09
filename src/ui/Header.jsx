import { useState, useEffect, useRef } from "react";
import "./Header.css";

function Header({ isDark, setIsDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close menu when clicking outside nav-links & menu button
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className="header">
      <img src="/eagle.png" alt="logo" />

      {/* Desktop / Mobile Menu */}
      <div ref={menuRef} className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Hamburger for Mobile */}
      <button
        ref={buttonRef}
        className="menu-btn"
        onClick={toggleMenu}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Theme toggle */}
      <button
        className={`theme-toggle ${isDark ? "dark" : ""}`}
        onClick={toggleTheme}
      >
        <div className="toggle-thumb">{isDark ? "☀️" : "🌙"}</div>
      </button>
    </div>
  );
}

export default Header;
