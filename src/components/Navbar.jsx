import { useState, useEffect } from "react";
import OutsideClick from "./OutsideClick";
import IconMenuBurger  from "~icons/circum/menu-burger"
import IconShoppingCart from "~icons/circum/shopping-cart"
import IconUser from "~icons/circum/user"
import IconSearch from "~icons/circum/search"

import "./Navbar.css";

function Navbar() {
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [yScrollPosition, setYScrollPosition] = useState(0);
  const [navbarVisibleClass, setNavbarVisibleClass] = useState("");
  const iconColor = "#760000";
  const toggleDropDown = () => {
    setDropDownVisible(!dropDownVisible);
  };

  const toggleDropDownOff = () => {
    setDropDownVisible(false);
  };

  const showTopNavbar = () => {
    setNavbarVisibleClass("top");
    setYScrollPosition(window.scrollY);
  };

  const showMidNavbar = () => {
    setNavbarVisibleClass("mid");
    setYScrollPosition(window.scrollY);
  };

  const hideNavbar = () => {
    setNavbarVisibleClass("hidden");
    setYScrollPosition(window.scrollY);
    toggleDropDownOff();
  };

  const scrollNavbar = () => {
    if (window.scrollY === 0) {
      showTopNavbar();
    } else if (window.scrollY < yScrollPosition) {
      showMidNavbar();
    } else {
      hideNavbar();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNavbar);
    return () => {
      window.removeEventListener("scroll", scrollNavbar);
    }
  });

  return (
    <div className={`navbar ${navbarVisibleClass}`}>
      <OutsideClick onClickOutside={toggleDropDownOff}>
      <div className="hamburger-menu">
        <IconMenuBurger
          onClick={toggleDropDown}
          size={"2rem"}
          color={iconColor}
        />
      </div>
      <nav className={dropDownVisible ? "left-sidebar active" : "left-sidebar"}>
        <ul className="shop-links">
          <li>SHOP</li>
          <li>SUBSCRIPTIONS</li>
          <li>LEARN</li>
        </ul>
      </nav>
      </OutsideClick>

      <div className="logo">
        <svg width="43" height="43" version="1.1" viewBox="0 0 169.53 169.53" xmlns="http://www.w3.org/2000/svg">
         <g transform="translate(-21.24 -44.039)">
          <path d="m70.63 148.2h-46.865m66.325-0.22428h98.471m-82.555 14.381h77.775m-87.252 12.085h80.837m-112.3 0h-30.419m20.942-12.085c-9.1192 0-18.238 1e-5 -27.357 1e-5m77.775-1e-5c-0.92195 10.256-12.523 14.439-21.37 15.288-10.433 0.82161-23.788-1.6198-28.536-12.171-2.7156-9.206 7.1313-15.617 14.884-17.367 11.244-2.6579 25.346-1.3323 33.04 8.2305 1.223 1.7562 1.9919 3.8647 1.981 6.02zm34.388 43.856h-68.776m87.924-11.732h-107.07m-6.4658-5.8916h120m24.531-53.579h-169.07m-0.23254-6.2115h169.53m-168.22-14.564h166.95m-165.34-7.2895h163.73m-155.27-20.592h146.73m-132.09-18.624h117.5m-101.76-11.961h86.004m-60.868-9.8015h35.822" fill="none" stroke="#000" strokeWidth="1.53"/>
         </g>
        </svg>
      </div>

      <nav className="right-sidebar">
        <ul className="user-links">
          <li>
            <IconSearch size={"1.6rem"} color={iconColor} />
          </li>
          <li>
            <IconUser size={"1.6rem"} color={iconColor} />
          </li>
          <li>
            <IconShoppingCart size={"1.6rem"} color={iconColor} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
