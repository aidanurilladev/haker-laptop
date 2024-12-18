import React from "react";
import s from "./ModalInstallmentPlan.module.scss";
import { RiCloseLargeLine } from "react-icons/ri";
import Image from "next/image";
import InstallmentPlan from "./components/installmentPlan/InstallmentPlan";
import mous from "../../assets/mous-removebg-preview.png";

const ModalInstallmentPlan = () => {
  return (
    <div className={s.modalInstallmentPlan}>
      <div className={s.closeX}>
        <RiCloseLargeLine />
      </div>
      <div className={s.content}>
        <div className={s.product}>
          <div className={s.productImg}>
            <Image src={mous} alt="img" />
          </div>
          <h2>Logitech G304 Lightspeed Black</h2>
        </div>
        <InstallmentPlan/>
      </div>
    </div>
  );
};

export default ModalInstallmentPlan;
