/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Projects.scss";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimatedCard] = useState({ y: 0, oppacity: 1 });
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"]`;

    client.fetch(query).then((data) => {
      setProjects(data);
      setFilterProject(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
  };

  return (
    <>
      <h2 className="head-text">
        My <span>Projects</span>
      </h2>
      <div className="app__projects-filter">
        {["UI/UX", "Web app", "Mobile app", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__project-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__project-portfolio"
      >
        {filterProject.map((project, index) => (
          <div className="app__project-item app__flex" key={index}>
            <div className="app__project-img app_flex">
              <img src={urlFor(project.imgUrl)} alt={project.name}></img>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;
