import React, { useState } from "react";
import { ProjectData } from "./ProjectData";
import { FaEye, FaGithub } from "react-icons/fa";

const Project = () => {
  const [tabSelect, setTabSelect] = useState("All");
  const [projectData, setProjectData] = useState(ProjectData);
  const filterList = ["All", "ReactJS", "JavaScript", "Other"];

  const handleFilter = (skill) => {
    setTabSelect(skill);
    if (skill === "All") {
      setProjectData(ProjectData);
    } else if (skill === "Other") {
      const otherProjects = ProjectData.filter(
        (project) =>
          !project.tech.toLowerCase().includes("react") &&
          !project.tech.toLowerCase().includes("javascript")
      );
      setProjectData(otherProjects);
    } else {
      const filteredProjects = ProjectData.filter((project) =>
        project.tech.toLowerCase().includes(skill.toLowerCase())
      );
      setProjectData(filteredProjects);
    }
  };

  return (
    <div>
      <h1 className="text-5xl font-bold">Projects</h1>
      <svg width="15%" height="30">
        <line
          x1="0"
          y1="10"
          x2="100%"
          y2="10"
          strokeWidth="8"
          stroke="yellow"
        />
      </svg>
      <div className="">
        <ul className="flex justify-start items-center text-gray-600 gap-6 pl-5 mb-8 bg-gray-300 w-72 rounded-lg">
          {filterList.map((skill, index) => (
            <li
              key={index}
              className={
                tabSelect === skill
                  ? "text-yellow-500"
                  : "list-none cursor-pointer "
              }
              onClick={() => handleFilter(skill)}
            >
              {skill}
            </li>
          ))}
        </ul>
        <ul className="grid grid-cols-3 gap-8 mb-4 pr-4">
          {projectData.map((project, index) => (
            <li key={index} className="  rounded-xl focus:outline-hsl-45">
              <a
                href={project.preview}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3 className="flex justify-center text-teal-900 underline mb-4 uppercase ">
                  {project.title}
                </h3>
                <figure className="relative w-full object-fill  aspect-w-16 aspect-h-9 rounded-xl overflow-hidden mb-4">
                  {project.image ? (
                    <img
                      className="w-96 h-48 hover:opacity-50"
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <div className="bg-gray-300 w-96 h-48 flex items-center justify-center">
                      No Image Available
                    </div>
                  )}
                </figure>
              </a>

              <p className="text-gray-600">- {project.overView}</p>
              <p className="flex justify-center text-gray-800 mt-4">
                {project.tech}
              </p>
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href={project.preview}
                  target="_blank"
                  className="flex align-middle items-center justify-center gap-4 text-yellow-400 bg-gray-500 hover:bg-gray-700 rounded-full p-2"
                  rel="noopener noreferrer"
                  style={{
                    pointerEvents:
                      project.preview === "https://" ? "none" : "auto",
                    opacity: project.preview === "https://" ? "0.6" : "1",
                  }}
                >
                  <FaEye />
                  Preview
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="flex align-middle items-center justify-center gap-4 text-yellow-400 bg-gray-500 hover:bg-gray-700 rounded-full p-2"
                  rel="noopener noreferrer"
                  style={{
                    pointerEvents:
                      project.githubLink === "https://" ? "none" : "auto",
                    opacity: project.githubLink === "https://" ? "0.6" : "1",
                  }}
                >
                  <FaGithub />
                  Github
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
