import { IoHomeOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navContainer">
        <Link to="/">
          <IoHomeOutline />
        </Link>
        <Link to="/notifications">
          <CiBellOn />
        </Link>

        <CiUser />
        <CiSettings />
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
