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
  { icon: <CgMenuGridR />, label: "Компания", id: 1 },
  { icon: <BsPeopleFill />, label: "Контакты", id: 2 },
  { icon: <IoIosStarOutline />, label: "О нас", id: 3 },
  { icon: <IoSettingsOutline />, label: "Наше производство", id: 4 },
  { icon: <AiOutlineQuestionCircle />, label: "Почему мы ?", id: 5 },
  { icon: <MdWifiTethering />, label: "Новости и статьи", id: 6 },
  { icon: <IoPerson />, label: "Вакансии", id: 7 },
];
const Contacts: FC = () => {
  return (
    <section className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainNav}>
            {contacts.map((el) => (
              <>
                <div key={el.id} className={scss.contact_nav}>
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
