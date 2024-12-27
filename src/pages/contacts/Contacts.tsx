import { FC } from "react";
import scss from "./Contacts.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdWifiTethering } from "react-icons/md";
import Answer from "./contactSections/answer/Answer";
import QuestionFor from "./contactSections/questionfor/QuestionFor";

const contacts = [
  { icon: <CgMenuGridR />, label: "Компания" },
  { icon: <BsPeopleFill />, label: "Контакты" },
  { icon: <IoIosStarOutline />, label: "О нас" },
  { icon: <IoSettingsOutline />, label: "Наше производство" },
  { icon: <AiOutlineQuestionCircle />, label: "Почему мы ?" },
  { icon: <MdWifiTethering />, label: "Новости и статьи" },
  { icon: <IoPerson />, label: "Вакансии" },
];
const Contacts: FC = () => {
  return (
    <section className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainNav}>
            {contacts.map((el, idx) => (
              <>
                <div key={idx} className={scss.contact_nav}>
                  <div className={scss.icon}>
                    <h1 className={scss.ico}>{el.icon}</h1>
                    <span>{el.label}</span>
                  </div>
                </div>
              </>
            ))}
          </div>
          <Answer />
        </div>
      </div>
      <QuestionFor />
    </section>
  );
};

export default Contacts;
