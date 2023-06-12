"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
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
    setOpenNav((prev)=> !prev);
  }
  return (
    <nav className="w-full flex justify-between items-center p-8 shadow-md">
      <Link href="/" className="text_color font-semibold text-[25px]">
        Rehabify
      </Link>
      {/* Desktop Navigation Bar */}
      <ul
        className={"lg:flex hidden  items-center gap-16 "
        }
      >
        <FaTimes size="1.5rem" onClick={handleNav} className="lg:hidden flex" />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}
      </ul>
      
      {/* Mobile Navigation Bar  */}
      {openNav && 
       <ul
       className={"flex flex-col bg-[#efefef] text-black shadow-xl justify-between items-center p-4 rounded-lg gap-4 absolute right-[3%] top-[5%] z-10 "
       }
     >
      
       <FaTimes size="1.5rem" onClick={handleNav} className="lg:hidden flex" />
       {links.map((link) => (
         <Link key={link.id} href={link.url}>
           {link.title}
         </Link>
       ))}
     </ul>}

     
      <DarkModeToggle/>
      <div className="rounded-full shadow-md flex items-center p-2 justify-center relative">
      <FaUser size="2rem" onClick={handleNav} className="lg:hidden flex " />
      </div>

      
    </nav>
  )
}

export default NavBar