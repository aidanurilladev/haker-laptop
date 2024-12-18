import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { VscQuestion } from "react-icons/vsc";
import s from "./DeliverWay.module.scss"
import { GrLocation } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";

const DeliverWay = () => {
  return (
    <div className={s.deliverWay}>
      <div className={s.way}>
        <div className={s.card}>
          <BiTimeFive />
          <div className={s.cardText}>
            <h2>Срочная доставка за 2 часа<VscQuestion /></h2>
            <h3>Доставка Yandex.Go </h3>
          </div>
        </div>
        <h4>от 1 000 ₽</h4>
      </div>
      <div className={s.way}>
        <div className={s.card}>
        <GrLocation />
          <div className={s.cardText}>
            <h2>Стандартная доставка</h2>
            <h3>19 декабря </h3>
          </div>
        </div>
        <h4>от 1 260 ₽</h4>
      </div>
      <div className={s.way}>
        <div className={s.card}>
           <IoHomeOutline />
          <div className={s.cardText}>
            <h2>Получить в пункте выдачи</h2>
            <h3>19-20 декабря </h3>
          </div>
        </div>
        <h4>от 1 210 ₽</h4>
      </div>
    </div>
  );
};

export default DeliverWay;
