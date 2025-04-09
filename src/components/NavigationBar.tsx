import { NavLink, useLocation } from "react-router";
import "./NavigationBar.css";

const NavigationBar = (): React.ReactNode => {
  const location = useLocation();
  const currentRoute = location.pathname;

  return (
    <ul className="navigation-bar-links">
      <li>
        <NavLink to="/product" className={currentRoute == "/product" ? "navigation-link-selected" : ""}>
          Product
        </NavLink>
      </li>
      <li>
        <NavLink to="/developers" className={currentRoute == "/developers" ? "navigation-link-selected" : ""}>
          Developers
        </NavLink>
      </li>
      <li>
        <NavLink to="/enterprise" className={currentRoute == "/enterprise" ? "navigation-link-selected" : ""}>
          Enterprise
        </NavLink>
      </li>
      <li>
        <NavLink to="/pricing" className={currentRoute == "/pricing" ? "navigation-link-selected" : ""}>
          Pricing
        </NavLink>
      </li>
    </ul>
  );
};

export default NavigationBar;