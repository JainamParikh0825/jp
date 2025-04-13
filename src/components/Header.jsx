import { Link, useLocation } from "react-router";
import "../styles/header.css";
import LightThemeLogo from "/icons/icon-sun.svg";
import DarkThemeLogo from "/icons/icon-moon.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";

const Header = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="left-container"></Link>
        <div className="right-container">
          <nav className="navbar">
            <div
              className={`burger-menu ${burgerMenuOpen ? "open" : ""}`}
              onClick={() => setBurgerMenuOpen(!burgerMenuOpen)}
            >
              {burgerMenuOpen ? (
                <RxCross2 size={20} className="icon-cancel" />
              ) : (
                <RxHamburgerMenu size={20} />
              )}
            </div>
            <ul className="nav-list">
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={location.pathname === "/projects" ? "active" : ""}>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link
                  to="https://drive.google.com/file/d/1Xu5tiodGeq6vHFYmltvQu9LXbs4rDuOA/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="theme-container" onClick={toggleTheme}>
            <img
              src={theme === "light" ? DarkThemeLogo : LightThemeLogo}
              alt={theme === "light" ? "🌙" : "☀️"}
              className="logo-theme"
            />
          </div>
        </div>
      </header>
      {burgerMenuOpen && <MobileNavigation />}
    </>
  );
};

export default Header;
