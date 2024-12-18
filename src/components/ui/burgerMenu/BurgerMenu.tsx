"use client";
import React, { useState } from "react";
import Link from "next/link";
import scss from "./BurgerMenu.module.scss";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { usePathname } from "next/navigation";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [disableClicks, setDisableClicks] = useState(false); 
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDisableClicks(true); 
    setTimeout(() => {
      setDisableClicks(false); 
    }, 500); 
  };

  return (
    <div className={scss.burgerMenu}>
      <button className={scss.burgerIcon} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`${scss.menu} ${isOpen ? scss.open : ""}`}>
        <Link
          href="/"
          onClick={toggleMenu}
          className={pathname === "/" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0} 
        >
          главная
        </Link>
        <Link
          href="/accessory"
          onClick={toggleMenu}
          className={pathname === "/accessory" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0} 
        >
          акссессуар
        </Link>
        <Link
          href="/catalog"
          onClick={toggleMenu}
          className={pathname === "/catalog" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0} 
        >
          каталог
        </Link>
      
        <Link
          href="/contact"
          onClick={toggleMenu}
          className={pathname === "/contact" ? scss.active : ""}
          tabIndex={disableClicks ? -1 : 0} 
        >
          контакт
        </Link>
       
      </div>
    </div>
  );
};

export default BurgerMenu;
