import { FC } from "react";
import scss from "./Answer.module.scss";
import Image from "next/image";
import HyperPc from "@/assets/hyperPcjpg.jpg";
import TechSup from "@/assets/AIjpeg.jpeg";

const datas = [
  {
    name: "Телефон",
    value: "+7 (495) 120-35-20",
  },
  {
    name: "Вопросы о покупке",
    value: "sales@hyperpc.ru",
  },
  {
    name: "Серверные решения",
    value: "server@hyperpc.ru",
  },
  {
    name: "Режим работы",
    value: "Ежедневно с 10:00 до 00:00",
  },
  {
    name: "Сайт",
    value: "https://hyperpc.ru",
  },
];
const Answer: FC = () => {
  return (
    <section className={scss.Answer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.countrybtns}>
            <h1>Контакты</h1>
            <div className={scss.btns}>
              <button>Москва</button>
              <button>Алматы</button>
              <button>Дубай</button>
            </div>
          </div>
          <div className={scss.questionBlock}>
            <Image
              className={scss.image}
              width={500}
              height={500}
              src={HyperPc}
              alt=""
            />
            <div className={scss.block}>
              <h1>Вопросы о покупке</h1>

              <p>
                Ответим на любые интересующие вопросы и поможем с выбором
                компьютера
              </p>
              <span className={scss.linear}></span>
              <div className={scss.datas}>
                {datas.map((el, idx) => (
                  <>
                    <div key={idx} className={scss.data}>
                      <p>{el.name}</p>
                      <h6>{el.value}</h6>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className={scss.questionBlock}>
            <div className={scss.block}>
              <h1>Техническая поддержка</h1>

              <p>
                Возникла проблема с устройством? Мы найдем для вас лучший
                вариант поддержки
              </p>
              <span className={scss.linear}></span>
              <div className={scss.datas}>
                {datas.map((el, idx) => (
                  <>
                    <div key={idx} className={scss.data}>
                      <p>{el.name}</p>
                      <h6>{el.value}</h6>
                    </div>
                  </>
                ))}
              </div>
              <button>Записаться на сервиc</button>
            </div>
            <Image
              className={scss.image}
              width={500}
              height={500}
              src={TechSup}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Answer;
