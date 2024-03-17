import React, { useState } from "react";
import { nanoid } from "nanoid";
import Skills from "./Skills";
import ProgrammingLanguages from "./ProgrammingLanguages";

const About = () => {
  const [divSize, setDivSize] = useState(false);
  const [hideText, setHideText] = useState("Readmore....");
  const paraArr = [
    "Hello guys! 👋 My name is Amanulla Iqbal Mulla, and I hail from Ainapur, Belguam, Karnataka. Professionally, I am a Frontend Developer with 10 months of experience at Publicis Sapient, where I delved into HTML, CSS, JavaScript, and React. Growing up bilingual, I developed a profound appreciation for languages, now fluently speaking four. This linguistic aptitude offers me a unique perspective and aids in effective client communication worldwide. I take pride in infusing projects with a personalized touch, embedding client identity and messages into designs, resulting in visually captivating and user-friendly products. Outside of work, I indulge in photography and music production, unleashing my creativity. Moreover, I'm deeply passionate about Web3, including crypto, NFTs, and blockchain technology, foreseeing their transformative potential in business and online interactions. If you have a groundbreaking project idea, I'm eager to collaborate and turn your vision into reality. Let's connect and embark on a journey to bring your concepts to life!",
    " I'm currently in a transition phase. Recently, I experienced a layoff, prompting me to seize this opportunity to further develop my skills and expertise. Presently, I am enrolled in training at Geekster, focusing on becoming a proficient Full Stack Developer. During this training, I am fully immersed in mastering various technologies and frameworks essential for full-stack development. From front-end tools like HTML, CSS, and JavaScript to back-end technologies such as Node.js, Express.js, and databases like MongoDB, I am dedicated to honing my skills across the entire development stack. While I am actively learning and expanding my knowledge, I am also eagerly seeking opportunities to apply my newfound expertise in real-world scenarios. I am open to exploring job opportunities where I can leverage my training and contribute effectively as a Full Stack Developer. Additionally, I invite you to take a look at my portfolio to gain insights into my projects and capabilities. Your feedback and any potential job requirements are highly valued and appreciated. Please feel free to reach out with any opportunities or suggestions you may have—I am enthusiastic about exploring new prospects and contributing to meaningful projects. Thank you for considering my profile, and I look forward to potential collaborations and opportunities ahead!",
  ];

  function toggleHandeler() {
    setDivSize(!divSize);
    let text = "Hide...";
    if (hideText === "Hide...") {
      text = "Readmore....";
    }
    setHideText(text);
  }

  return (
    <div className="w-full  mr-4 p-4 ">
      <h1 className="text-5xl font-bold">About</h1>
      <svg width="10%" height="30">
        <line
          x1="0"
          y1="10"
          x2="100%"
          y2="10"
          strokeWidth="8"
          stroke="yellow"
        />
      </svg>
      <div className="text-white leading-6 text-left bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 p-8 rounded-lg  flex flex-col items-center gap-4">
        <div
          className="flex flex-col gap-4 text-base leading-6"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textWrap: "wrap",
            height: divSize ? "auto" : "80px",
          }}
        >
          {paraArr.map((ele) => {
            return <p key={nanoid()}>{ele}</p>;
          })}
        </div>
        <button
          className="text-base outline-none border-none bg-transparent text-white animate-float duration-4000 ease-in-out infinite cursor-pointer"
          onClick={toggleHandeler}
        >
          {hideText}
        </button>
      </div>

      <ProgrammingLanguages />
      <Skills />
    </div>
  );
};

export default About;
