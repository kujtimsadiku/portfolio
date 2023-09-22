/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";

import { urlFor, client } from "../../client";

import "./About.scss";

const AboutMeSection = () => {
  return (
    <div className="app__about-me">
      <h2 className="head-text">
        I Know That
        <span> Good Design </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <h4 className="head-text">
        About me
        <p className="p-text">
          I embarked on my coding journey in 2022 with no prior experience.
          <br />
          My foundation was forged at Hive Helsinki, where I honed
          problem-solving skills, optimized code, and embraced software design
          principles.
          <br />
          <br />
          As an aspiring Full Stack Developer, I recently completed the Full
          Stack Open Course at the University of Helsinki.
          <br />
          <br />
          Proficient in frontend technologies like HTML, CSS, JavaScript, and
          React.js,
          <br />I equally excel in backend technologies, including Node.js,
          Express, MongoDB, REST API, GraphQL, Sanity, JSON, and Redux
          Toolkit/Query.
        </p>
      </h4>
    </div>
  );
};

const AboutComp = () => {
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
      <AboutMeSection />
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
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

export const About = AppWrap(
  MotionWrap(AboutComp, "app_about"),
  "about",
  "app__whitebg"
);
