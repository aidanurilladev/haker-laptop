import React from "react";
import keyboard from "@/assets/accesory-keyboard.jpg";
import Image from "next/image";
import scss from "@/pages/nav_accessory/Keyboars.module.scss";
import { BsCart3 } from "react-icons/bs";

const Keyboards = () => {
  return (
    <div id={scss.keyboards}>
      <div className="container">
        <h1>Игровые клавиатуры</h1>
        <p>
          Игровые клавиатуры – это особая компьютерная периферия, созданная для
          тех, кто увлекается играми. В отличие от стандартной/офисной модели,
          данное устройство помогают получать гораздо больше удовольствия за
          счёт своего красивого внешнего вида, удобства использования и
          применения дополнительных функций.
        </p>
        <div className={scss.keyboards}>
          <div className={scss.keyboardCard}>
            <Image src={keyboard} alt="img" />

            <div className={scss.keyboardText}>
              <h3>HYPERPC KEYBOARD</h3>
              <div className={scss.buy}>
              <h2>Цена 11 200 ₽  </h2>
              <button> <span><BsCart3 /></span>Купить</button>
              </div>
            
            </div>
          </div>

          <div className={scss.keyboardCard}>
            <Image src={keyboard} alt="img" />

            <div className={scss.keyboardText}>
              <h3>HYPERPC KEYBOARD</h3>
              <div className={scss.buy}>
              <h2>Цена 11 200 ₽  </h2>
              <button> <span><BsCart3 /></span>Купить</button>
              </div>
            
            </div>
          </div>


          <div className={scss.keyboardCard}>
            <Image src={keyboard} alt="img" />

            <div className={scss.keyboardText}>
              <h3>HYPERPC KEYBOARD</h3>
              <div className={scss.buy}>
              <h2>Цена 11 200 ₽  </h2>
              <button> <span><BsCart3 /></span>Купить</button>
              </div>
            
            </div>
          </div>



          <div className={scss.keyboardCard}>
            <Image src={keyboard} alt="img" />

            <div className={scss.keyboardText}>
              <h3>HYPERPC KEYBOARD</h3>
              <div className={scss.buy}>
              <h2>Цена 11 200 ₽  </h2>
              <button> <span><BsCart3 /></span>Купить</button>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboards;
