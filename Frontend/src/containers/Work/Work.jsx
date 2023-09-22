import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";

import "react-tooltip/dist/react-tooltip.css";
import "./Work.scss";

const WorkComp = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const expQuery = `*[_type == "experiences"]`;

    client.fetch(expQuery).then((data) => {
      console.log(data);
      setExperience(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Work Experience</h2>
      <div className="app__work-container">
        <div className="app__work-exp">
          {experience?.map((experience) => (
            <motion.div className="app__work-exp-item" key={experience.year}>
              <div className="app__work-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__work-exp-works">
                {experience.works.map((work, index) => (
                  <React.Fragment key={work.name + index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__work-exp-work"
                      data-tip
                      data-tooltip-id={work.name}
                      key={work.name}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="work-tooltip"
                      data-html={true}
                    >
                      {work.desc}
                    </ReactTooltip>
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export const Work = AppWrap(
  MotionWrap(WorkComp, "app__work"),
  "work",
  "app__graybg"
);
