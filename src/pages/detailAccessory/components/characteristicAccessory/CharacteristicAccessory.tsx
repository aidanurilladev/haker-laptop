import React from "react";
import s from "./CharacteristicAccessory.module.scss";

const CharacteristicAccessory = () => {
  return (
    <>
      <div className={s.head}>
        <div className="container">
          <h3> Характеристики </h3>
        </div>
      </div>
      <div className={s.content}>
        <div className={`container`}>
          <h1>Характеристики Logitech G304 Lightspeed Black</h1>
          <ul>
            <h2>Общие характеристики</h2>
            <li>
              <h3>Дизайн мыши</h3>
              <h4> cимметричный</h4>
            </li>
            <li>
              <h3>Количество программируемых клавиш</h3>
              <h4> 6</h4>
            </li>
            <li>
              <h3>Интерфейс подключения</h3>
              <h4> USB/радиоканал</h4>
            </li>
          </ul>
          <ul>
            <h2>Технические характеристики</h2>
            <li>
              <h3>Модель сенсора</h3>
              <h4> HERO</h4>
            </li>
            <li>
              <h3>Разрешение оптического сенсора</h3>
              <h4> 12000 DPI</h4>
            </li>
            <li>
              <h3>Частота опроса</h3>
              <h4> 1000 Гц</h4>
            </li>
            <li>
              <h3>Принцип работы</h3>
              <h4>оптический светодиодный</h4>
            </li>
            <li>
              <h3>Количество клавиш</h3>
              <h4>6</h4>
            </li>
          </ul>
          <ul>
            <h2>Габаритные характеристики</h2>
            <li>
              <h3>Размеры (ШxВxД)</h3>
              <h4>62.1х38.2х116.6 мм</h4>
            </li>
            <li>
              <h3>Вес</h3>
              <h4>99 г</h4>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CharacteristicAccessory;
