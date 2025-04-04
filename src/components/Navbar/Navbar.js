import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import "./Navbar.css";

const Homeitems = [
  {
    key: "about",
    label: <Link href="/About">About</Link>,
  },
  {
    key: "contact",
    label: <Link href="/Contact">Contact</Link>,
  },
];

const AboutItems = [
  {
    key: "Home",
    label: <Link href="/">Home</Link>,
  },
  {
    key: "About",
    label: <a href="#about">About</a>,
  },
  {
    key: "Skills",
    label: <a href="#skills">Skills</a>,
  },
  {
    key: "Projects",
    label: <a href="#projects">Projects</a>,
  },
];

const ContactItems = [
  {
    key: "Home",
    label: <Link href="/">Home</Link>,
  },
];

const Navbar = ({ pageName }) => {
  return (
    <div className="navbar-container">
      <Menu
        mode="horizontal"
        className="navbar"
        selectable={false}
        items={
          pageName === "Home"
            ? Homeitems
            : pageName === "About"
            ? AboutItems
            : pageName === "Contact"
            ? ContactItems
            : []
        }
      />
    </div>
  );
};

export default Navbar;
