import img1 from "/public/assets/image7.jpg";
import img2 from "/public/assets/haircolor.jpg";
import img3 from "/public/assets/image9.jpg";
import img4 from "/public/assets/image4.jpg";
import img5 from "/public/assets/lashes.jpg";

export const navData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Services",
    link: "/our-services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export const servicesData = [
  {
    name: "Haircuts",
    img: img1,
    subData: [
      {
        service: "Kids",
        price: "20",
      },
      {
        service: "Men",
        price: "20",
      },
      {
        service: "Women",
        price: "40",
      },
    ],
  },
  {
    name: "Coloring",
    img: img2,
    subData: [
      {
        service: "Colors",
        price: " ",
      },
      {
        service: "Highlights",
        price: " ",
      },
      {
        service: "Ombre/Balayage",
        price: " ",
      },
      {
        service: "Touch ups",
        price: " ",
      },
    ],
  },
  {
    name: "Perms",
    img: img3,
    subData: [
      {
        service: "Short hair",
        price: " ",
      },
      {
        service: "Long hair",
        price: " ",
      },
    ],
  },
  {
    name: "Treatments",
    img: img4,
    subData: [
      {
        service: "Conditioning",
        price: "$35",
      },
      {
        service: "Scalp treatments",
        price: " ",
      },
      {
        service: "Keratin Treatment",
        price: " ",
      },
    ],
  },
  {
    name: "Extras",
    img: img5,
    subData: [
      {
        service: "Hair Extensions",
        price: " ",
      },
      {
        service: "Lashes",
        price: "",
      },
    ],
  },
];
