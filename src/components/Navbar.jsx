import { useState, useEffect } from "react";
import Foco from "react-foco";
import IconMenuBurger  from "~icons/circum/menu-burger"
import IconShoppingCart from "~icons/circum/shopping-cart"
import IconUser from "~icons/circum/user"
import IconSearch from "~icons/circum/search"
import Jupiter from "../assets/ak_jupiter2.svg";

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
  });

  // useEffect(() => {
  //   window.addEventListener("resize", () => {
  //     console.log(window.innerWidth);
  //   })
  // })

  return (
    <div className={`navbar ${navbarVisibleClass}`}>
      <Foco onClickOutside={toggleDropDownOff}>
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
      </Foco>

      <div className="logo">
        <img src={Jupiter} />
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
