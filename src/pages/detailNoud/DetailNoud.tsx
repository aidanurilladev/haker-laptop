import { FC } from "react";
import scss from "./DetailNoud.module.scss";
import noud from "@/assets/noud.webp";
import Image from "next/image";
import { FaCar } from "react-icons/fa";
import { BsBox2 } from "react-icons/bs";
import { IoNavigate } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";

const DetailNoud: FC = () => {
  return (
    <section className={scss.DetailNoud}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.all}>
            <div className={scss.imgNoud}>
              <Image src={noud} alt="img" />
            </div>
            <div className={scss.detalTex}>
              <h1>
                Apple MacBook Pro 14.2" <br />
                M3 (8С CPU/10С GPU) <br />8 ГБ, 1 ТБ Серый Космос
              </h1>
              <span>MR7K3RU/A</span>
              <h6>120000 com</h6>
              <div className={scss.block}>
                <h2>Способы получения</h2>
                <div className={scss.text1}>
                  <span>
                    <FaCar />
                  </span>
                  <h4>
                    Доставка в течение 24 <br />
                    часов с момента <br />
                    оформления
                  </h4>
                  <h3>бесплатно</h3>
                </div>
                <hr />

                <div className={scss.text1}>
                  <span>
                    <TbTruckDelivery />
                  </span>
                  <h4>
                    Срочная доставка в <br /> течение 2 часов
                  </h4>
                  <h3>от 200 сom</h3>
                </div>
                <hr />

                <div className={scss.text1}>
                  <span>
                    <BsBox2 />
                  </span>
                  <h4>Забрать в магазине</h4>
                  <h3>бесплатно</h3>
                </div>
                <hr />
                <div className={scss.text1}>
                  <span>
                    <IoNavigate />
                  </span>
                  <h4>Бишкек</h4>
                  <h3>бесплатно</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.characteristic}>
            <h1>Характеристика</h1>
            <div className={scss.characterTex}>
              <hr />
              <div className={scss.tex}>
                <span>Год выпуска модели </span>
                <p>2023 </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Диагональ экрана </span>
                <p>"14.2"</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Поверхность монитора </span>
                <p>Глянцевая</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Тип дисплея </span>
                <p>ЖК</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Тип матрицы </span>
                <p>TFT Активная матрица</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Разрешение экрана </span>
                <p>3024x1964</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Технология дисплея </span>
                <p>TFT Активная матрица</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Веб-камера </span>
                <p>Камера FaceTime HD 1080p</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>
                  Особенности для снижения влияния на окружающую среду{" "}
                </span>
                <p>
                  Удовлетворяет требованиям ENERGY STAR Не содержит ртути Без
                  ПВХ Не содержащее мышьяка стекло экрана Не содержит
                  бромсодержащих антипиренов Не содержит бериллий Для корпуса
                  используется только переработанный алюминий Пластик,
                  используемый для производства различных компонентов, как
                  минимум на 35% является переработанным Первичное древесное
                  волокно поступает только из рационально управляемых лесных
                  хозяйств
                </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Особенности корпуса </span>
                <p>Алюминиевый корпус</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Панель Touch Bar </span>
                <p>Без Touch Bar</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Тип системы </span>
                <p>Ноутбук</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Кол-во ядер процессора </span>
                <p>10</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Емкость установленной оперативной памяти </span>
                <p>16 ГБ</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Тип памяти а </span>
                <p>SSD</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Емкость батареи </span>
                <p>67 Ватт-часов</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Количество установленных батарей </span>
                <p>1</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Аудио/Видео особенности </span>
                <p>
                  Штатный видеовывод по стандарту DisplayPort через интерфейс
                  USB-C Система из шести динамиков Hi-Fi, включая низкочастотные
                  с подавлением резонанса Широкое стерео Система из трёх
                  направленных микрофонов с высоким коэффициентом сигнал/шум и
                  поддержкой записи аудио студийного качества Цифровой
                  видеовыход Thunderbolt 4 Пространственное аудио с функцией
                  динамического отслеживания движений головы при использовании
                  AirPods (3‑го поколения), AirPods Pro или AirPods Max
                </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Кабели в комплекте </span>
                <p>Кабель питания USB-C на MagSafe 3</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Цвет </span>
                <p>Серый Космос</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Аксессуары в комплекте </span>
                <p>
                  MacBook Pro Адаптер питания USB-C USB-C Charge Cable (2 m)
                  Руководство пользователя
                </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Аксессуары в комплекте </span>
                <p>
                  MacBook Pro Адаптер питания USB-C USB-C Charge Cable (2 m)
                  Руководство пользователя
                </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Высота </span>
                <p>15.5 мм</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Ширина </span>
                <p>312.6 мм</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Толщина </span>
                <p>3221.2 мм</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Вес </span>
                <p>1.55 кг</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Емкость накопителя </span>
                <p>1 ТБ</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Тип видеопамяти </span>
                <p>Видеопамять заимствуется у оперативной памяти</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Bluetooth </span>
                <p>Bluetooth 5.3</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Wi-Fi </span>
                <p>
                  IEEE 802.11a IEEE 802.11b IEEE 802.11g IEEE 802.11n Wi-Fi 4
                  IEEE 802.11ac Wi-Fi 5 IEEE 802.11ax Wi-Fi 6E
                </p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Входная частота </span>
                <p>50/60 Гц</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Входное напряжение </span>
                <p>AC 100-240 В</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Максимальная высота над уровнем моря при работе </span>
                <p>10000 футов</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>
                  Максимальная температура окружающей среды при работе
                </span>
                <p>35 °C</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>
                  Минимальная температура окружающей среды при работе{" "}
                </span>
                <p>10 °C</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Гарантия </span>
                <p>Да</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Гарантийный срок </span>
                <p>12 мес.</p>
              </div>
              <hr />
              <div className={scss.tex}>
                <span>Критерий оценки гарантии </span>
                <p>Серийный номер</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailNoud;
