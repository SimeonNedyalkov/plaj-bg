import { Input, InputGroup } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

export const InputWithKbd = () => (
  <InputGroup
    flex="1"
    endElement={
      <div className="flex flex-row justify-center items-center gap-2">
        <span className="pipe">|</span>
        <LuSearch />
      </div>
    }
  >
    <Input
      color="white"
      placeholder="Search ... "
      _placeholder={{ color: "inherit" }}
      className="search"
    />
  </InputGroup>
);
export default function AccountNavigation() {
  return (
    <nav className="accountnavigation">
      <div className="accountnavContainer">
        <InputWithKbd />
        <IoMailOpenOutline />
        <img
          className="size-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
    </nav>
  );
}
