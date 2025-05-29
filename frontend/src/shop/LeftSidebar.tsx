import { arrayWithBeanBagTypes } from "@/constants/constants";
import { GrCapacity } from "react-icons/gr";
import { LuWeight } from "react-icons/lu";
import { GrStatusPlaceholder } from "react-icons/gr";
import { SlWrench } from "react-icons/sl";
import { useState } from "react";
export default function LeftSideBar() {
  const classicData = arrayWithBeanBagTypes[0];
  const [selectedColor, setSelectedColor] = useState("#FF5733");

  const availableColors = [
    "#FF5733",
    "#4CAF50",
    "#2196F3",
    "#FFC107",
    "#9C27B0",
  ];

  const stats = [
    { name: "Volume", icon: <GrCapacity />, value: classicData.volume ?? 0 },
    { name: "Weight", icon: <LuWeight />, value: classicData.weight },
    {
      name: "Place",
      icon: <GrStatusPlaceholder />,
      value: classicData.placeTaken,
    },
    { name: "Support", icon: <SlWrench />, value: classicData.weightSupport },
  ];

  return (
    <div className="leftSideBarContainer">
      <div className="leftSideBarTop">
        <div className="colorArc">
          {availableColors.map((color) => (
            <div
              key={color}
              className="colorDot"
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
        <div
          className="selectedColorCircle"
          style={{ backgroundColor: selectedColor }}
        />
        <div className="colorArcText">
          Here you can select the color of your Bean Bag !
        </div>
      </div>
      <div className="leftSideBarBottom">
        <div className="beanBagStats">
          {stats.map(({ name, value, icon }) => (
            <div key={name} className="beanBagStatItem">
              <div className="statLabel">
                <span className="icon">{icon}</span>
                <span className="statName">{name}</span>
              </div>
              <span className="statValue">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
