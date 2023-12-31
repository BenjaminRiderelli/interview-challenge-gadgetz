import { useEffect, useState, useContext } from "react";
import Logo from "../../assets/logo-no-background.svg";
import style from "./header.module.css";
import { NavLink, useLocation, Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Context from "../../Context";

const HEADER = () => {
  const { screenSize, cartItems } = useContext(Context);

  const {pathname} = useLocation()
  const productId = pathname.split("/")[2]  


  return (
    <header className={style.header}>
      <Link to="/products">
      <img className={style.logo} src={Logo} />
      </Link>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink
              end
              to="/products"
              className={style.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "var(--main-text-color)" : "",
                };
              }}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to={`/products/${productId}`}
              className={style.link}
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isActive ? "var(--main-text-color)" : "",
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
