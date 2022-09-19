import { GoSearch } from "react-icons/go";
import { BiNews } from "react-icons/bi";
import { ImImages } from "react-icons/im";
import { FaVideo } from "react-icons/fa";

export const navLinks = [
  {
    name: "all",
    icon: <GoSearch className="mr-2" />,
  },
  {
    name: "news",
    icon: <BiNews className="mr-2" />,
  },
  {
    name: "image",
    icon: <ImImages className="mr-2" />,
  },
  {
    name: "video",
    icon: <FaVideo className="mr-2" />,
  },
];
