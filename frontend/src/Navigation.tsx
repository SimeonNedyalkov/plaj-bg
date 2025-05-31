import { IoHomeOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";

import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi2";
import { HiUser } from "react-icons/hi2";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useCart } from "./Cart/CartProvider";

export default function Navigation() {
  const { openCart } = useCart();
  return (
    <nav className="navigation">
      <div className="navContainer">
        <NavLink to="/" end>
          {({ isActive }) => (isActive ? <IoHome /> : <IoHomeOutline />)}
        </NavLink>
        <button style={{ zIndex: 100, cursor: "pointer" }} onClick={openCart}>
          <IoCartOutline />
        </button>
        <NavLink to="/userSettings">
          {({ isActive }) => (isActive ? <HiUser /> : <HiOutlineUser />)}
        </NavLink>
        <NavLink to="/settings">
          {({ isActive }) =>
            isActive ? <IoSettings /> : <IoSettingsOutline />
          }
        </NavLink>
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
