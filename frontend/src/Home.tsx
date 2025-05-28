import LeftSideBar from "./sidebars/LeftSidebar";
import RightSideBar from "./sidebars/RightSideBar";

export default function Home() {
  return (
    <div className="homeContainer">
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
