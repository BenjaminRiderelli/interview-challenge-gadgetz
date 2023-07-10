import { useEffect, useState } from "react";
import Logo from "../../assets/logo-no-background.svg";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

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
      </span>
    </header>
  );
};

export default NavBar;
