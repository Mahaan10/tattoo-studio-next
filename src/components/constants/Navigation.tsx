import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { BsTwitterX } from "react-icons/bs";

export const headerMenu = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Tattoo artists", href: "/tattoo-artists" },
  { id: 3, title: "Lookbook", href: "/lookbook" },
  { id: 4, title: "Booking", href: "/booking" },
  { id: 5, title: "Guest Artist", href: "/guest-artist" },
  { id: 6, title: "Articles", href: "/articles" },
  { id: 7, title: "About us", href: "/about" },
  { id: 8, title: "Contact", href: "/contact" },
];

export const socialMedia = [
  {
    id: 1,
    icon: <FaInstagram size={25} />,
    href: "/",
    className: "bg-linear-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]",
  },
  // {
  //   id: 2,
  //   icon: (
  //     <PiTelegramLogo
  //       size={25}
  //       className="bg-blue-600 text-white rounded-full"
  //     />
  //   ),
  //   href: "/",
  //   className: "bg-white",
  // },
  {
    id: 3,
    icon: <FaWhatsapp size={25} />,
    href: "/",
    className: "bg-green-500",
  },
  // {
  //   id: 4,
  //   icon: <BsTwitterX size={25} />,
  //   href: "/",
  //   className: "bg-black",
  // },
];

export const HomePageContent = [
  {
    id: 1,
    title: "Artists",
    linkHref: "/tattoo-artists",
    imgSrc: "/images/gallery/IMG_3381.JPG",
  },
  {
    id: 2,
    title: "Lookbook",
    linkHref: "/lookbook",
    imgSrc: "/images/gallery/IMG_0257.PNG",
  },
  {
    id: 3,
    title: "Articles",
    linkHref: "/articles",
    imgSrc: "/images/gallery/IMG_0258.jpg",
  },
];
