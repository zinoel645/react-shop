import { NavLink } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "./AppContext.js";
import Button from "./Button.js";

export default function Navbar(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const app = useContext(AppContext);
  const cartCount = app.getCartCount();

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    if(isDarkTheme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkTheme])

  function handleThemeClick() {
    setIsDarkTheme(!isDarkTheme);
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        ZStore
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button className="theme-switcher" onClick={handleThemeClick}>{isDarkTheme ? "Dark" : "Light"}</Button>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
