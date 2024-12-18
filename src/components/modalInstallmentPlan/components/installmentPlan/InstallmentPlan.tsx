import React from "react";
import s from "./InstallmentPlan.module.scss";

const InstallmentPlan = () => {
  return (
    <>
      <div className={s.installmentPlan}>
        <h2>Рассрочка</h2>
        <ul>
          <li>
            <h3>Срок кредита</h3>
            <h3>6 мес.</h3>
          </li>
          <li>
            <h3>Кредитная ставка</h3>
            <h3>0%</h3>
          </li>
          <li>
            <h3>Ежемесячный платёж</h3>
            <h3>734 ₽</h3>
          </li>
          <li>
            <h3>Сумма к выплате</h3>
            <h3>4 400 ₽</h3>
          </li>
          <li>
            <h3>Переплата</h3>
            <h3>0 ₽ / 0 %</h3>
          </li>
        </ul>
      </div>
      <div className={s.credit}>
        <div className={s.time}>
          <h3>Срок кредита</h3>
          <h1>11 мес.</h1>
        </div>
        <div className={s.month}>
          <h3>Ежемесячный платеж</h3>
          <h1>442 ₽</h1>
        </div>
        <div className={s.sum}>
          <h3>Сумма к выплате</h3>
          <h1>4 862 ₽</h1>
        </div>
      </div>
    </>
  );
};

export default InstallmentPlan;
