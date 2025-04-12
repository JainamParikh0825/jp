import { Link } from "react-router";
import "../styles/header.css";
import LightThemeLogo from "/icons/icon-sun.svg";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="left-container"></Link>
      <div className="right-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
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
