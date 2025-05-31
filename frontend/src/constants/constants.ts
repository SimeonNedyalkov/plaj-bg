import classic from "/beanbagTypes/5519940.png";
import teardrop from "/beanbagTypes/1698704.png";
import lounger from "/beanbagTypes/Bean-Bag-PNG-Image-Background-1.png";
import pillow from "/beanbagTypes/image_processing20210105-31893-12prs86.png";
import beanbagToSell from "/sellTypes/pngtree-beanbag-line-icon-png-image_9015693.png";
import beachTowelToSell from "/sellTypes/434098.png";
import pillowToSell from "/sellTypes/1928753.png";
import kids from "/beanbagTypes/kids.png";

export const arrayWithBeanBagTypes = [
  {
    type: "Classic",
    img: classic,
    dimentions: { width: 100, height: 70 },
    volume: "380 L",
    weight: "3-4 kgs",
    placeTaken: "1 m²",
    weightSupport: "150 kgs",
  },
  { type: "Teardrop", img: teardrop },
  { type: "Lounger", img: lounger },
  { type: "Pillow", img: pillow },
  { type: "Kids", img: kids },
];

export const arrayWithTypesToSell = [
  { type: "BeanBag", img: beanbagToSell },
  { type: "Towel", img: beachTowelToSell },
  { type: "Pillows", img: pillowToSell },
];
