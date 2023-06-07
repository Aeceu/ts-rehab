"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Service",
    url: "/service",
  },
  {
    id: 3,
    title: "Location",
    url: "/location",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];
const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handleNav = ()=>{
    setOpenNav(!openNav);
  }
  return (
    <nav className="w-full flex justify-between items-center p-8 relative shadow-md">
      <Link href="/" className="text_color font-semibold text-[25px]">
        Rehabify
      </Link>
      <ul
        className={
          openNav
            ? "flex flex-col bg-[#efefef] text-black shadow-xl justify-between items-center p-4 rounded-lg gap-4 absolute right-[3%] top-[20%] z-10 "
            : "lg:flex hidden  items-center gap-16 "
        }
      >
        <FaTimes size="1.5rem" onClick={handleNav} className="lg:hidden flex" />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </ul>
      <DarkModeToggle/>
      <FaBars size="2rem" onClick={handleNav} className="lg:hidden flex" />
    </nav>
  )
}

export default NavBar