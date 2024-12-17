"use client";
import { usePathname } from "next/navigation";
import scss from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/haket_laptop.png";
import { FaUser } from "react-icons/fa";
import { useRef, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  const [circlePos, setCirclePos] = useState(0);
  const navRef = useRef(null);



  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Image width={150} height={150} src={logo} alt="logo" />
          <div className={scss.nav} ref={navRef}>
            <div
              className="circle"
              style={{ transform: `translateX(${circlePos}px)` }}
            ></div>
            <Link href="/" className={pathname === "/" ? scss.active : ""}>
              главная
            </Link>
            <Link
              href="/catalog"
              className={pathname === "/catalog" ? scss.active : ""}
            >
              каталог
            </Link>
            <Link
              href="/accessory"
              className={pathname === "/accessory" ? scss.active : ""}
            >
              акссессуар
            </Link>
            <Link
              href="/contact"
              className={pathname === "/contact" ? scss.active : ""}
            >
              контакт
            </Link>
          </div>
          <FaUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
