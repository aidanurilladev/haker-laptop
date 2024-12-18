import React from "react";
import scss from "./Footer.module.scss";
import { RiInstagramFill } from "react-icons/ri";
import { RiTelegram2Fill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text_top}>
            <div className={scss.text}>
              <div className={scss.box}>
                <h3>Аксессуары</h3>
                <p>Мониторы</p>
                <p>Клавиатуры</p>
                <p>Мышки</p>
                <p>Коврики</p>
                <p>Наушники</p>
                <p>Микрофоны</p>
                <p>Сумки</p>
              </div>
              <div className={scss.box}>
                <h3>Игровые компьютеры</h3>
                <p>Все модели</p>
                <p>В наличии</p>
                <p>Конфигуратор</p>
                <p>Аренда</p>
                <p>Подбор</p>
              </div>
              <div className={scss.box}>
                <h3>Услуги</h3>
                <p>Все услуги</p>
                <p>Модернизация</p>
                <p>Трейд-ин</p>
                <p>Профилактика</p>
                <p>Аренда ПК</p>
              </div>
            </div>
            <div className={scss.top}>
              <p>
                Приглашаем вас в наш{" "}
                <a href="/contact">Haker магазин ноутбуков</a>. Написать нам в{" "}
                <a href="https://api.whatsapp.com/send/?phone=996225746454&text&type=phone_number&app_absent=0">
                  WhatsApp
                </a>{" "}
                или позвонить +7 (495) 120-35-20.
              </p>
              <div className={scss.icon}>
                <RiInstagramFill />
                <RiTelegram2Fill />
                <IoLogoWhatsapp />
              </div>
            </div>
          </div>
          <div className={scss.block}>
            <p>Copyright © 2018-2024 HAKER.</p>
            <p>Правовая информация | Карта сайта</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
