/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Education.scss";
import "react-tooltip/dist/react-tooltip.css";

const EducationComp = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const expQuery = `*[_type == "education"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(expQuery).then((data) => {
      console.log(data);
      setEducation(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">Education & Skills</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-items app__flex"
              key={skill.name}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {education
            ?.sort((a, b) => b.year - a.year)
            .map((education) => (
              <motion.div className="app__skills-exp-item" key={education.year}>
                <div className="app__skills-exp-year">
                  <p className="bold-text">{education.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {education.schools.map((school, index) => (
                    <React.Fragment key={school.school + index}>
                      <motion.div
                        key={school.school}
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-tooltip-id={school.school}
                      >
                        <h4 className="bold-text">{school.school}</h4>
                        {school.fields?.map((field, index) => (
                          <p className="p-text" key={field + index}>
                            {field}
                          </p>
                        ))}
                      </motion.div>
                      <ReactTooltip
                        id={school.school}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                        data-html={true}
                      >
                        {school.desc}
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

export const Education = AppWrap(
  MotionWrap(EducationComp, "app__skills"),
  "educations",
  "app__whitebg"
);
