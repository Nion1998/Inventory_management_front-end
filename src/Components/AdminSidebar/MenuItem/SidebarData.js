import {BsChatRightText, BsGraphUpArrow, BsPinAngle} from "react-icons/bs";
import {AiOutlineSetting} from "react-icons/ai";
import {
  MdDownloading,
  MdOutlineAdminPanelSettings,
  MdOutlineContacts,
  MdOutlineInsertChartOutlined,
} from "react-icons/md";

export const SidebarData = [
  {
    id: 2,
    title: "Manage Staffs",
    link: "manage-staffs",
    iconClass: <MdOutlineInsertChartOutlined />, // Directly assign the icon without curly braces
  },
  {
    id: 3,
    title: "Manage Products",
    iconClass: <MdDownloading />, // Directly assign the icon without curly braces
    submenus: [
      {title: "Categories", link: "categories"},
      {title: "Brands", link: "brands"},
      {title: "Units", link: "units"},
      {title: "Products", link: "products"},
    ],
  },

  {
    id: 4,
    title: "Brands",
    link: "brands",
    iconClass: <BsChatRightText />, // Directly assign the icon without curly braces
  },
  {
    id: 5,
    title: "Products",
    link: "products",
    iconClass: <BsChatRightText />, // Directly assign the icon without curly braces
  },
  {
    id: 6,
    title: "Users",
    link: "users",
    iconClass: <MdOutlineAdminPanelSettings />, // Directly assign the icon without curly braces
  },
  {
    id: 7,
    title: "Reviews & Ratings",
    link: "reviews ",
    iconClass: <MdOutlineContacts />, // Directly assign the icon without curly braces
  },
  {
    id: 8,
    title: "Refunds",
    link: "refunds",
    iconClass: <BsChatRightText />, // Directly assign the icon without curly braces
  },
  {
    id: 9,
    title: "Profile",
    link: "profile",
    iconClass: <MdOutlineAdminPanelSettings />, // Directly assign the icon without curly braces
  },
  {
    id: 10,
    title: "Settings",
    iconClass: <MdOutlineContacts />, // Directly assign the icon without curly braces
    submenus: [
      {title: "Global Settings", link: "global-settings"},
      {title: "Website Settings", link: "website-settings"},
    ],
  },
  {
    id: 10,
    title: "Offers & Alerts",
    iconClass: <MdOutlineContacts />, // Directly assign the icon without curly braces
    submenus: [
      {title: "Notifications", link: "notifications"},
      {title: "Coupons", link: "coupons"},
    ],
  },
];
