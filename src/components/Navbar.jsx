import "./Navbar.css";
import { useNavbarRoutes } from "../hooks/use-navbar-routes";
import { Route, Routes, NavLink , useLocation} from "react-router-dom";
import { About } from "../pages/About";
import { useState } from "react";
import { Home } from "../pages/Home";

function NavbarItems({ to, name }) {
  const location = useLocation();

  return (
    <li className="nav-item">
      <NavLink className={`nav-link ${location.pathname === to ? "isActive" : ""}`} to={to}>
        {name}
      </NavLink>
    </li>
  );
}

export function Navbar() {
  const { routes } = useNavbarRoutes();
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <header className="nav-container">
        <img className="nav-logo" src="./logo.png" alt="logo" />
        <button onClick={toggleMenu} className="nav-btn">
          <span className="material-symbols-outlined">
            {menu ? "close" : "menu"}
          </span>
        </button>
        <nav className={`nav ${menu ? "isOpen" : ""}`}>
          <ul className="nav-list">
            {routes.map((route) => (
              <NavbarItems key={route.to} {...route} />
            ))}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
