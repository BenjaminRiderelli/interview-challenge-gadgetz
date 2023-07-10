import React from "react";
import Logo from "../../assets/logo-no-background.svg";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
  return (
    <header className={style.header}>
      <img className={style.logo} src={Logo} />
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink
              to="/products"
              className={style.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "var(--hover-color)" : "",
                };
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products/:productid"
              className={style.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "var(--hover-color)" : "",
                  display: isActive? "block" : "none"
                };
              }}
            >
             <span>
            {">"}
            </span> Product Details
            </NavLink>
          </li>
        </ul>
      </nav>
      <span>
        <ShoppingCartOutlinedIcon className={style.shoppingCart} />
      </span>
    </header>
  );
};

export default NavBar;
