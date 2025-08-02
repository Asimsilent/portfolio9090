import "./Header.css";

function Header({ isDark, setIsDark }) {
  const toggleTheme = () => setIsDark(!isDark);
  return (
    <div
      className="sticky-top z-3 d-flex justify-content-around align-items-center border-start border-bottom px-4 rounded-start-pill shadow"
      style={
        isDark
          ? {
              backgroundColor: "	rgba(15, 10, 25, 0.95)",
              color: "rgba(220, 190, 255, 0.85)",
            }
          : {
              backgroundColor: "	rgba(230, 255, 250, 1)",
              color: "	rgba(30, 60, 60, 0.85)",
            }
      }
    >
      <img src="/eagle.png" alt="logo" style={{ width: "8%", height: "8%" }} />

      <div className="d-flex justify-content-between align-items-center p-4 gap-4">
        <a
          href="#home"
          className={`text-decoration-none ${
            isDark ? "text-white" : "text-dark"
          }`}
        >
          Home
        </a>
        <a
          href="#about"
          className={`text-decoration-none ${
            isDark ? "text-white" : "text-dark"
          }`}
        >
          About
        </a>
        <a
          href="#skills"
          className={`text-decoration-none ${
            isDark ? "text-white" : "text-dark"
          }`}
        >
          Skills
        </a>
        <a
          href="#work"
          className={`text-decoration-none ${
            isDark ? "text-white" : "text-dark"
          }`}
        >
          Work
        </a>
        <a
          href="#contact"
          className={`text-decoration-none ${
            isDark ? "text-white" : "text-dark"
          }`}
        >
          Contact
        </a>
      </div>

      <button
        className={`theme-toggle ${isDark && "dark"}`}
        onClick={toggleTheme}
      >
        <div className="toggle-thumb">{isDark ? "☀️" : "🌙"}</div>
      </button>
    </div>
  );
}

export default Header;
