import React from "react";
import s from "./DetialLocation.module.scss";
import { IoCaretDown, IoCaretUp, IoHomeOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const DetailLocation = () => {
  return (
    <div className={s.detailLocation}>
      <div className={s.home}>
        <div className={s.homeIcon}>
          <IoHomeOutline />
        </div>
        <div className={s.location}>
          <h2>Забрать из магазина сегодня</h2>
          <div className={s.openLocation}>
            <h3>
              Выбрать магазин
              <IoCaretDown />
            </h3>
            <span>В наличии</span>
          </div>
          <div className={s.closeLocation}>
            <h3>
              <IoCaretUp />
              Скрыть магазины
            </h3>
            <div className={s.address}>
              <div className={s.map}></div>
              <div className={s.addressText}>
                <h3>Бишкек</h3>
                <h4>ул. Куренкеева 138, Ежедневно 09:00 - 21:00</h4>
                <h5>Забрать сегодня</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <IoIosSend />
        Бишкек
      </div>
    </div>
  );
};

export default DetailLocation;
