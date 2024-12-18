"use client";
import scss from "./navBar.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { GrHpi } from "react-icons/gr";
import { FaApple } from "react-icons/fa";
import { SiLenovo } from "react-icons/si";
import { SiAsus } from "react-icons/si";
import { SiAcer } from "react-icons/si";
import { SiDell } from "react-icons/si";
import { SiHuawei } from "react-icons/si";

const accessories = [
  { icon: <CgMenuGridR />, label: "Все ноутбуки" },
  { icon: <GrHpi />, label: "HP" },
  { icon: <FaApple />, label: "Apple" },
  { icon: <SiLenovo />, label: "Lenovo" },
  { icon: <SiAsus />, label: "Asus" },
  { icon: <SiAcer />, label: "Acer" },
  { icon: <SiHuawei />, label: "Huawei" },
  { icon: <SiDell />, label: "Dell" },
];

const NavBar = () => {
  return (
    <div id={scss.accessory}>
      <div className="container">
        <div className={scss.accessory}>
          {accessories.map((item, index) => (
            <div key={index} className={scss.menu}>
              <h1>{item.icon}</h1>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
