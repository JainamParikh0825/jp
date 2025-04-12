import { Link, useLocation } from "react-router";
import "../styles/header.css";
import LightThemeLogo from "/icons/icon-sun.svg";

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <Link to="/" className="left-container"></Link>
      <div className="right-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className={location.pathname === "/" ? "active" : ""}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/projects" ? "active" : ""}>
              <Link to="/projects">Projects</Link>
            </li>
            <li>Resume</li>
          </ul>
        </nav>
        <div className="theme-container">
          <img src={LightThemeLogo} alt={"☀️"} className="logo-theme" />
        </div>
      </div>
    </header>
  );
};

export default Header;
