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
    name: "Our Salon",
    link: "/our-salon",
  },
  {
    name: "Services",
    link: "/our-services",
  },
  {
    name: "Contact Us",
    link: "/contact",
  },
];

export const servicesData = [
  {
    id: "1",
    name: "Haircuts",
    img: img1,
    subData: [
      {
        id: "11",
        service: "Kids",
        price: "20",
      },
      {
        id: "12",
        service: "Men",
        price: "20",
      },
      {
        id: "13",
        service: "Women",
        price: "40",
      },
    ],
  },
  {
    id: "2",
    name: "Colors",
    img: img2,
    subData: [
      {
        id: "21",
        service: "Full Colors",
        price: " ",
      },
      {
        id: "22",
        service: "Highlights",
        price: " ",
      },
      {
        id: "23",
        service: "Ombre/Balayage",
        price: " ",
      },
      {
        id: "24",
        service: "Touch ups",
        price: " ",
      },
    ],
  },
  {
    id: "3",
    name: "Perms",
    img: img3,
    subData: [
      {
        id: "31",
        service: "Short hair",
        price: " ",
      },
      {
        id: "32",
        service: "Long hair",
        price: " ",
      },
    ],
  },
  {
    id: "4",
    name: "Treatments",
    img: img4,
    subData: [
      {
        id: "41",
        service: "Conditioning",
        price: "$35",
      },
      {
        id: "42",
        service: "Scalp treatments",
        price: " ",
      },
      {
        id: "43",
        service: "Keratin Treatment",
        price: " ",
      },
    ],
  },
  {
    id: "5",
    name: "Extras",
    img: img5,
    subData: [
      {
        id: "51",
        service: "Hair Extensions",
        price: " ",
      },
      {
        id: "52",
        service: "Lashes",
        price: "",
      },
    ],
  },
];
