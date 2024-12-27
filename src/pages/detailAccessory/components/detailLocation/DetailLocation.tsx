"use client";
import React, { useState } from "react";
import s from "./DetialLocation.module.scss";
import { IoCaretDown, IoCaretUp, IoHomeOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const DetailLocation = () => {
  const [openLocation, setOpenLocation] = useState(false);
  return (
    <div className={s.detailLocation}>
      <div className={s.home}>
        <div className={s.homeIcon}>
          <IoHomeOutline />
        </div>
        <div className={s.location}>
          <h2>Забрать из магазина сегодня</h2>
          <div
            className={s.openLocation}
            style={{ display: openLocation ? "none" : "flex" }}
          >
            <h3 onClick={() => setOpenLocation(true)}>
              Выбрать магазин
              <IoCaretDown />
            </h3>
            <span>В наличии</span>
          </div>
          <div
            className={s.closeLocation}
            style={{ display: openLocation ? "flex" : "none" }}
          >
            <h3 onClick={() => setOpenLocation(false)}>
              <IoCaretUp />
              Скрыть магазины
            </h3>
            <div className={s.address}>
              <a href="#" className={s.map}></a>
              <div className={s.addressText}>
                <h3>Бишкек</h3>
                <a href="#">ул. Куренкеева 138, Ежедневно 09:00 - 21:00</a>
                <h5>Забрать сегодня</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className={s.city}>
        <IoIosSend />
        Бишкек
      </a>
    </div>
  );
};

export default DetailLocation;
