import { arrayWithBeanBagTypes } from "@/constants/constants";
export default function RightSideBar() {
  return (
    <div className="rightContainer">
      {arrayWithBeanBagTypes.map((beanbag) => (
        <div className="singleBB">
          <div>{beanbag.type}</div>
          <img src={beanbag.img} alt="" />
        </div>
      ))}
    </div>
  );
}
