import BeanBagCanvas from "../threeD/BeanBagCanvas";
import { Button } from "@chakra-ui/react";

export default function Shop() {
  return (
    <div>
      <div className="Logo">Plaj.bg</div>
      <svg
        width="800"
        height="700"
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="my-svg"
      >
        <path
          d="M40 0.5H135.513C156.539 0.500021 176.237 10.7837 188.257 28.0361C200.463 45.5566 220.467 55.9999 241.82 56H553.2C575.276 55.9999 596.077 45.6554 609.398 28.0518C622.531 10.6978 643.037 0.500142 664.8 0.5H760C781.815 0.5 799.5 18.1848 799.5 40V760C799.5 781.815 781.815 799.5 760 799.5H40C18.1848 799.5 0.5 781.815 0.5 760V40C0.500005 18.5256 17.6364 1.05346 38.9805 0.512695L40 0.5Z"
          fill="white"
          stroke="white"
        />
      </svg>
      <div className="beanBag">
        <BeanBagCanvas beanbagId={1} />
      </div>
      <div className="beanBagLabel">Gray Beanbag</div>
      <div className="beanBagText">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        inventore atque et! Illum alias voluptatibus dignissimos modi impedit
        non architecto veritatis?
      </div>
      <Button
        colorPalette={"orange"}
        variant={"surface"}
        className="beanBagButton"
      >
        Get now
      </Button>
    </div>
  );
}
