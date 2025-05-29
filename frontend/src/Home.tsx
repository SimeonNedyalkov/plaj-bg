import LeftSideBar from "./shopAndParalax/LeftSidebar";
import RightSideBar from "./shopAndParalax/RightSideBar";
import Shop from "./shopAndParalax/Shop";

export default function Home() {
  return (
    <div className="shopContainer">
      <div className="leftSideBar">
        <LeftSideBar />
      </div>

      <div className="middleWrapper">
        <Shop />
      </div>
      <div className="rightSideBar">
        <RightSideBar />
      </div>
    </div>
  );
}
