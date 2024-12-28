import { FC } from "react";
import scss from "./QuestionFor.module.scss";

const QuestionFor: FC = () => {
  return (
    <section className={scss.QuestionFor}>
      <div className="container">
        <div className={scss.wrapper}>
          <div className={scss.left}>
            <h2>
              ОСТАЛИСЬ ЕЩЁ <br /> ВОПРОСЫ?
            </h2>
            <p>
              Заполните форму и мы перезвоним, чтобы ответить <br /> на ваш
              вопрос. Если не дозвонимся — напишем в мессенджеры.
            </p>
          </div>
          <div className={scss.right}>
            <form>
              <div className={scss.inputGroup}>
                <label>Имя </label>
                <input type="text" placeholder="Введите имя" required />
              </div>
              <div className={scss.inputGroup}>
                <label>Email </label>
                <input type="email" placeholder="Введите Email" required />
              </div>
              <div className={scss.inputGroup}>
                <label>Телефон </label>
                <input type="tel" placeholder="+996--" required />
              </div>
              <div className={scss.checkboxGroup}>
                <input type="checkbox" id="messenger" />
                <label htmlFor="messenger">Можно писать в мессенджеры</label>
              </div>
              <div className={scss.inputGroup}>
                <label>Ваш вопрос</label>
                <textarea placeholder="" />
              </div>
              <div className={scss.captcha}>
                <div className="g-recaptcha" data-sitekey="your-site-key"></div>
              </div>
              <button type="submit" className={scss.submit}>
                ОТПРАВИТЬ
              </button>
              <p className={scss.disclaimer}>
                Нажимая кнопку «Отправить», вы подтверждаете свое согласие на
                обработку персональных данных.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionFor;
