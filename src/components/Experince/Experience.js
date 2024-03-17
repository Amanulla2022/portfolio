import React from "react";
import geeksterLogo from "../../images/experience/geekster.png";
import sapientLogo from "../../images/experience/sapientLogo.png";

const Experience = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold">Experience</h1>
      <svg width="20%" height="30">
        <line
          x1="0"
          y1="10"
          x2="100%"
          y2="10"
          strokeWidth="8"
          stroke="yellow"
        />
      </svg>
      <div className="w-full mx-auto px-4 py-8">
        <div className="flex gap-8">
          <h1 className="text-3xl font-bold mb-4">Geekster @Apprentership</h1>
          <img className="h-10 w-20" src={geeksterLogo} alt="Sapient Logo" />
        </div>
        <div className="grid gap-6">
          <div className="bg-teal-600 text-white shadow-md rounded-lg p-6 ">
            <div className="flex justify-evenly">
              <h3 className="text-lg font-semibold mb-2">
                Full Stack Web Development Cource
              </h3>
              <span className="text-gray-600">Sep-2023 to Present</span>
            </div>
            <ul className="list-disc list-inside">
              <li>I am doing @Apprentership @Geekster</li>
              <li>
                Where I learned Basic Java and Java DSA, Practicing Leetcode
                Quetions
              </li>
              <li>
                Trained On HTML, HTML5, FIGMA, CSS, CSS3 , TailwindCSS and some
                projects
              </li>
              <li>
                Trained On JavaScript and ES6 features and practiced with
                projects
              </li>
              <li>Trained On ReactJs and practicing more and more projects </li>
              <li>
                In Geekster Weekly Test is very Helpful to revise concept that
                covered on that week
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-8 mt-8">
          <h1 className="text-3xl font-bold mb-4">Sapient Experience</h1>
          <img className="h-10 w-20" src={sapientLogo} alt="Sapient Logo" />
        </div>
        <div className="grid gap-6">
          <div className="bg-teal-600 text-white shadow-md rounded-lg p-6 ">
            <div className="flex justify-evenly">
              <h3 className="text-lg font-semibold mb-2">
                Developer Mobile Solution L1
              </h3>
              <span className="text-gray-600">Sep-2022 to Dec-2022</span>
            </div>

            <ul className="list-disc list-inside">
              <li>I got trained on Android Development with Kotlin(Basic)</li>
              <li>Done a simple App called MEMES App</li>
              <li>
                Used MVVM Pattern, Dragger-Hilt where I used @Inject and to
                @Provide
              </li>
              <li>
                Used Glide to get the image, database called SQLite Database
              </li>
              <li>Used coroutines, Flows, RecyclerView and View Pager etc..</li>
            </ul>
          </div>
          <div className="text-white bg-teal-600 shadow-md rounded-lg p-6">
            <div className="flex justify-evenly">
              <h3 className="text-lg font-semibold mb-2">
                Junior Associate Technology
              </h3>
              <span className="text-gray-600">Feb-2022 to Sep-2022</span>
            </div>
            <ul className=" list-inside list-disc">
              <li>
                I got trained on Web Technologies like HTML5 CSS3 javaScript
                with ES6 features
              </li>
              <li>
                Done a Website called as e-Commerce, user freindly,
                responsive(mobile first <br />
                approach) and I am the Scrum Master of My Team
              </li>
              <li>
                It mainly contains pages like Home, Product List , Login,
                Sign-up and Mini-cart
              </li>
              <li>
                Particularly I have done the cart part,collebrating with team
                member, learn <br /> the git commands
              </li>
              <li>
                Integrated all individual parts into main, JSON to fetch the
                data, here i have <br />
                implemented HTML,SASS,Advance javaScript
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
