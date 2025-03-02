import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

const activeClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.linkActive);
};

const AuthNav = () => {
  return (
    <div className={css.navigation}>
      <NavLink className={activeClass} to="/login">
        Login
      </NavLink>
      <NavLink className={activeClass} to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default AuthNav;
