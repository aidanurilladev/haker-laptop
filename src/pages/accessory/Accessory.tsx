import React from "react";
import scss from "./Accessory.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { PiMouseMiddleClickLight, PiBagSimpleThin } from "react-icons/pi";
import { BsKeyboard } from "react-icons/bs";
import { TbDeviceIpadHorizontal } from "react-icons/tb";
import { CiHeadphones } from "react-icons/ci";
import { HiOutlineMicrophone } from "react-icons/hi2";
import Link from "next/link";

const accessories = [
  { icon: <CgMenuGridR />, label: "Все аксессуары" },

  { icon: <BsKeyboard />, label: "Клавиатуры", href: "/all-accessories" },
  { icon: <PiMouseMiddleClickLight />, label: "Мышки", href: "/keyboards"},
  { icon: <TbDeviceIpadHorizontal />, label: "Коврики" },
  { icon: <CiHeadphones />, label: "Наушники" },
  { icon: <HiOutlineMicrophone />, label: "Микрофоны" },
  { icon: <PiBagSimpleThin />, label: "Сумки" },
];

const Accessory = () => {
  return (
    <div id={scss.accessory}>
      <div className="container">
        <div className={scss.accessory}>
          {accessories.map((item, index) => (
            <div key={index} className={scss.menu}>
              {item.href ? (
                <Link href={item.href}>
                  <h1>{item.icon}</h1>
                  <span>{item.label}</span>
                </Link>
              ) : (
                <div>
                  <h1>{item.icon}</h1>
                  <span>{item.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accessory;
