import { useEffect, useState, useContext } from "react";
import Logo from "../../assets/logo-no-background.svg";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Context from "../../Context";

const HEADER = () => {
  const { screenSize, cartItems } = useContext(Context);
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
                  display: isActive ? "block" : "none",
                };
              }}
            >
              Products
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
                  display: isActive ? "block" : "none",
                  textAlign: isActive ? "center" : "",
                };
              }}
            >
              {screenSize.width > 600 ? "> " : ""}
              Product Details
            </NavLink>
          </li>
        </ul>
      </nav>
      <span className={style.shoppingCartContainer}>
        <ShoppingCartOutlinedIcon className={style.shoppingCart} />
        {cartItems > 0 && <span className={style.cartItems}>{cartItems}</span>}
      </span>
    </header>
  );
};

export default HEADER;
