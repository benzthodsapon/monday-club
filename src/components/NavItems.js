import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Services",
    path: "./services",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaBriefcase />,
  },
  {
    id: 3,
    title: "Map",
    path: "./Map",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaLeanpub />,
  },
  {
    id: 4,
    title: "Contact Us",
    path: "./contactus",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPhone />,
  },
];
