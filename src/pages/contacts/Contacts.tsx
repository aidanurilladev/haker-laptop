import { FC } from "react";
import scss from "./Contacts.module.scss";
import { CgMenuGridR } from "react-icons/cg";
import { BsPeopleFill } from "react-icons/bs";
import { IoIosStarOutline } from "react-icons/io";
import { IoPerson, IoSettingsOutline } from "react-icons/io5";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdWifiTethering } from "react-icons/md";

const Contacts: FC = () => {
  return (
    <section className={scss.Contacts}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.mainNav}>
            <div className={scss.contact_nav}>
              <div className={scss.icon}>
                <CgMenuGridR className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <BsPeopleFill className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <IoIosStarOutline className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <IoSettingsOutline className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <AiOutlineQuestionCircle className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <MdWifiTethering className={scss.ico} />
                <span>Контакты</span>
              </div>
              <div className={scss.icon}>
                <IoPerson className={scss.ico} />
                <span>Контакты</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
