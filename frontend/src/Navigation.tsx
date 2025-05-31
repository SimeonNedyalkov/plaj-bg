import { IoHomeOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useCart } from "./Cart/CartProvider";

export default function Navigation() {
  const { openCart } = useCart();
  return (
    <nav className="navigation">
      <div className="navContainer">
        <Link to="/">
          <IoHomeOutline />
        </Link>
        <button style={{ zIndex: 100, cursor: "pointer" }} onClick={openCart}>
          <CiShoppingCart />
        </button>

        <CiUser />
        <CiSettings />
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
