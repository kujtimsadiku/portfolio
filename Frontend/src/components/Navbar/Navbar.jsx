import { useState } from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.kujtim} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {t("navbar", { returnObjects: true }).map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      {/* 2 flags en and fin for translation */}
      {/* <button className="app__navbar-lang">LANG</button> */}
      {/* <button className="app__navbar-lang">LANG</button> */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {t("navbar", { returnObjects: true }).map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
