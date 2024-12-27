import React from "react";
import s from "./DetailPageAccessory.module.scss";
import Image from "next/image";
import mous from "../../assets/mous-removebg-preview.png";
import DetailLocation from "./components/detailLocation/DetailLocation";
import DeliverWay from "./components/deliverWay/DeliverWay";
import CharacteristicAccessory from "./components/characteristicAccessory/CharacteristicAccessory";
import ModalInstallmentPlan from "@/components/modalInstallmentPlan/ModalInstallmentPlan";

const DetailPageAccessory = () => {
  return (
    <>
    <div className={`${s.detailPageAccessory} container`}>
      <div className={s.mainCharacter}>
        <div className={s.detailPageAccessoryImg}>
          <Image src={mous} alt={"img"}/>
        </div>
        <div className={s.detailPageAccessoryText}>
          <h1>Logitech G304 Lightspeed Black</h1>
          <h5>Код производителя: 910-005286</h5>
          <p>
            Оснащенная 6 программируемыми кнопками беспроводная мышь Logitech
            G304 Lightspeed подходит для комплектации ноутбуков и стационарных
            компьютеров. Манипулятор оборудован оптическим светодиодным сенсором
            HERO, демонстрирующим значительное разрешение. Высокая точность
            позиционирования курсора помогает достигать успеха в динамичных
            видеоиграх.
          </p>
          <div className={s.price}>
            <div className={s.mainPrice}>
              <h4> Цена 4 400 ₽</h4>
              <span>Рассчитать кредит</span>
            </div>
            <button>Оформить</button>
          </div>
          <DetailLocation />
          <DeliverWay />
        </div>
      </div>
    </div>
    <CharacteristicAccessory/>
    <ModalInstallmentPlan/>
    </>
  );
};

export default DetailPageAccessory;
