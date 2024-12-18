import React from "react";
import sass from "../accessory/CardsAccessory.module.scss";
import Image from "next/image";

import hak_klv from "@/assets/haker-klviatura.jpg";
import mouse from "@/assets/haker-mouse.jpg";
import mat from "@/assets/haker-mat.jpg";

const accessories = [
  { id: 1, image: hak_klv, title: "Клавиатура" },
  { id: 2, image: mouse, title: "Мышь" },
  { id: 3, image: mat, title: "Клавиатура" },



];

const CardsAccessory = () => {
  return (
    <div id={sass.cardsAcc}>
      <div className="container">
        <div className={sass.cardsAcc}>
          <h1>Игровые аксессуары</h1>
          <p>
            Хочешь играть как профессиональные игроки? Покупай топовые игровые
            девайсы! <br />
            Наши эксперты по геймингу помогут выбрать лучшие игровые аксессуары
            для максимально комфортной игры!
          </p>
        </div>
        <div className={sass.cards}>
          {accessories.map(({ id, image, title }) => (
            <div key={id} className={sass.cardsBlock}>
              <Image src={image} alt={title} />
              <h1>{title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsAccessory;
