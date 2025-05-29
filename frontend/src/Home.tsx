import LeftSideBar from "./shop/LeftSidebar";
import RightSideBar from "./shop/RightSideBar";
import Shop from "./shop/Shop";

export default function Home() {
  return (
    <div className="homeContainer">
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
      <img src="/Sea_Transparent_PNG_Image.png" alt="" className="sea" />
      <img src="/Seagull_PNG_Clip_Art_Image.png" alt="" className="seagull" />
    </div>
  );
}
