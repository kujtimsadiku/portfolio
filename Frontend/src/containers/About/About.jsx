/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = "*[_type == 'abouts']";

    try {
      client.fetch(query).then((data) => setAbouts(data));
    } catch (e) {
      console.log("error trying to fetch abouts", e);
    }
  }, []);

  return (
    <>
      <h2 className="head-text">
        I Know That
        <span> Good Design </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ oppacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
