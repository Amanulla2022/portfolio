import React from "react";

const ProgrammingLanguages = () => {
  const programmingLanguage = [
    { name: "HTML", proficiency: "95%" },
    { name: "CSS", proficiency: "90%" },
    { name: "JavaScript", proficiency: "85%" },
    { name: "Java", proficiency: "80%" },
    { name: "Tailwind CSS", proficiency: "90%" },
    { name: "Kotlin", proficiency: "50%" },
    { name: "Figma", proficiency: "75%" },
    { name: "React", proficiency: "80%" },
    { name: "NodeJs", proficiency: "70%" },
  ];

  const humanLanguages = [
    { name: "English", proficiency: "85%" },
    { name: "Kannada", proficiency: "93%" },
    { name: "Hindi", proficiency: "90%" },
    { name: "Urdu", proficiency: "70%" },
    { name: "Marathi", proficiency: "60%" },
  ];
  return (
    <>
      <h2 className="text-center text-gray-600 mt-8 mb-5 text-2xl underline">
        Languages
      </h2>
      <div className="grid grid-cols-2 gap-8 bg-teal-700 rounded-lg">
        <div className="w-full pt-4 ">
          <h3 className="text-2xl flex justify-center mb-5 text-white">
            Coding Language
          </h3>
          <ul className="p-5">
            {programmingLanguage.map((language, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <h4 className="font-semibold text-md">{language.name}</h4>
                  <data className="text-gray-300">{language.proficiency}</data>
                </div>
                <div className="w-full h-2 rounded-lg bg-[#383838]">
                  <div
                    className="h-full bg-yellow-200 rounded-lg"
                    style={{ width: language.proficiency }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full pt-4">
          <h3 className="text-2xl flex justify-center mb-5 text-white">
            Human Language
          </h3>
          <ul className="p-5">
            {humanLanguages.map((language, index) => (
              <li key={index} className="mb-4">
                <div className="flex items-center gap-1 mb-2">
                  <h4 className="font-semibold text-md">{language.name}</h4>
                  <data className="text-gray-300">{language.proficiency}</data>
                </div>
                <div className="w-full h-2 rounded-lg bg-[#383838]">
                  <div
                    className="h-full bg-yellow-200 rounded-lg"
                    style={{ width: language.proficiency }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
