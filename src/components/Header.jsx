import "../styles/header.css";
import LightThemeLogo from "/icons/icon-sun.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="left-container"></div>
      <div className="right-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li>Home</li>
            <li>Projects</li>
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
