import React from "react";
import figma from "../../images/skills/figma.png";
import html from "../../images/skills/html5.png";
import css from "../../images/skills/css.png";
import tailwind from "../../images/skills/tailwind.png";
import js from "../../images/skills/js.png";
import react from "../../images/skills/react.png";
import next from "../../images/skills/next.png";
import node from "../../images/skills/node.png";
import java from "../../images/skills/java.png";
import kotlin from "../../images/skills/kotlin.png";
import sql from "../../images/skills/sql.png";
import npm from "../../images/skills/npm.png";
import git from "../../images/skills/git.png";
import gitHub from "../../images/skills/gitHub.png";

const Skills = () => {
  let mySkills = [
    { img: figma, text: "Figma" },
    { img: html, text: "HTML5" },
    { img: css, text: "CSS" },
    { img: tailwind, text: "Tailwind CSS" },
    { img: js, text: "JavaScript" },
    { img: react, text: "React" },
    { img: next, text: "Next.js" },
    { img: node, text: "Node.js" },
    { img: java, text: "Java" },
    { img: kotlin, text: "Kotlin" },
    { img: sql, text: "SQL" },
    { img: npm, text: "npm" },
    { img: git, text: "Git" },
    { img: gitHub, text: "GitHub" },
  ];
  return (
    <div className="rounded-lg">
      <h2 className="text-center text-gray-600  mt-8 mb-5 text-2xl underline">
        Development Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 p-16 overflow-x-auto overscroll-contain scroll-padding-25 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 rounded-lg mb-8">
        {mySkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-42">
            <img
              className="transition duration-250 ease-in cursor-pointer h-24 rounded-lg"
              src={skill.img}
              alt={skill.text}
            />
            <p className="text-gray-300 text-sm">{skill.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
