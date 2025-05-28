import LeftSideBar from "./LeftSidebar";
import RightSideBar from "./RightSideBar";

export default function Shop() {
  return (
    <div className="shopContainer">
      <div className="leftSideBar">
        <LeftSideBar />
      </div>

      <div className="middle">Text</div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
    </div>
  );
}
