import { Link, useLocation } from "react-router";
import "../styles/mobile-nav.css";

const MobileNavigation = () => {
  const location = useLocation();

  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav-list">
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
  );
};

export default MobileNavigation;
