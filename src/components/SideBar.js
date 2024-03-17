import React, { useEffect, useState } from "react";
import mypic from "../images/My-Photo.jpeg";
import ageIcon from "../images/age.png";
import locationIcon from "../images/location.png";
import userIcon from "../images/user.png";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const SideBar = () => {
  const sidebarHeight = "calc(100vh - 64px)";
  const [age, setAge] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let ageTimer = null;
    if (age < 24) {
      ageTimer = setInterval(() => {
        setAge((val) => val + 1);
      }, 50);
    }
    return () => clearInterval(ageTimer);
  }, [age]);

  const text = Array.from({ length: 15 }, () =>
    Array.from({ length: 16 }, () => Math.round(Math.random())).join("")
  );
  text[text.length - 1] = "Hello Amanulla Here!!";

  useEffect(() => {
    let intervalId = setInterval(() => {
      setIndex((prevIndex) => prevIndex + 1);

      if (text[index] === "Hello Amanulla Here!!") {
        clearInterval(intervalId);
        setIndex(text.length - 1);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [text, index]);

  return (
    <aside
      style={{ height: sidebarHeight }}
      className="ml-20   w-64 flex flex-col gap-8 p-8 items-center text-center bg-opacity-75 bg-gray-800  rounded-lg text-white sticky top-8 transition-transform transform hover:translate-y-1  "
    >
      <section className="flex flex-col items-center justify-center">
        <img
          src={mypic}
          alt="My Profile Picture"
          className="w-40 h-40 rounded-full mb-4"
        />
        <h2 className="mb-4 uppercase">Amanulla Iqbal Mulla</h2>
        <p
          className="px-3 py-1 rounded-lg text-sm mb-4 w-48 bg-opacity-50 bg-gray-800 animate-pulse"
          style={{ textShadow: "0 0 5px white", border: "1px solid white" }}
        >
          {text[index]}
        </p>
      </section>
      <section className="flex flex-col gap-5 text-left">
        <div className="flex items-center gap-4">
          <div className=" bg-gray-800 w-10 h-10 flex justify-center items-center rounded-lg">
            <img src={ageIcon} alt="Age Icon" className="w-4 h-4" />
          </div>
          <div>
            <h6 className="text-sm font-normal text-gray-300">AGE</h6>
            <p className="text-sm">{age} years old</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className=" bg-gray-800 w-10 h-10 flex justify-center items-center rounded-lg">
            <img src={locationIcon} alt="Location Icon" className="w-4 h-4" />
          </div>
          <div>
            <h6 className="text-sm font-normal text-gray-300">LOCATION</h6>
            <p className="text-sm">Ainapur, Belgaum, Karnataka</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className=" bg-gray-800 w-10 h-10 flex justify-center items-center rounded-lg">
            <img src={userIcon} alt="User Icon" className="w-4 h-4" />
          </div>
          <div>
            <h6 className="text-sm font-normal text-gray-300">
              PERSONALITY TYPE
            </h6>
            <p className="text-sm">INFP-A/INFP-T</p>
          </div>
        </div>
      </section>

      <section className="flex justify-between w-full">
        <a href="https://github.com/Amanulla2022" target="_blank">
          <FaGithub className="w-6 h-6 fill-current text-gray-300 hover:text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/amanulla-mulla-000678232/"
          target="_blank"
        >
          <FaLinkedin className="w-6 h-6 fill-current text-gray-300 hover:text-white" />
        </a>
        <FaInstagram className="w-6 h-6 fill-current text-gray-300 hover:text-white" />
        <FaTwitter className="w-6 h-6 fill-current text-gray-300 hover:text-white" />
      </section>
    </aside>
  );
};

export default SideBar;
