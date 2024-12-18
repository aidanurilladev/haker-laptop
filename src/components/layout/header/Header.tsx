"use client";
import { usePathname } from "next/navigation";
import scss from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/haket_laptop.png";
import { FaUser } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import BurgerMenu from "@/components/ui/burgerMenu /BurgerMenu";
import { PiShoppingCartSimpleFill } from "react-icons/pi";

const Header = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Image width={150} height={150} src={logo} alt="logo" />

          {!isMobile ? (
            <>
              <div className={scss.nav} ref={navRef}>
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
              <div className={scss.icon}>
                <PiShoppingCartSimpleFill />
                <FaUser />
              </div>
            </>
          ) : (
            <>
              <div className={scss.burger}>
                <FaUser />

                <PiShoppingCartSimpleFill />
                <BurgerMenu />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
