import { IoHomeOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="navContainer">
        <IoHomeOutline />
        <CiBellOn />
        <CiUser />
        <CiSettings />
        <RxHamburgerMenu />
      </div>
    </nav>
  );
}
