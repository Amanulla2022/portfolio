import React from "react";

const Contact = () => {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("amanmulla167@gmail.com");
    alert("Email copied!");
  };

  const handleCopyPhoneNumber = () => {
    navigator.clipboard.writeText("+91 9590397339");
    alert("Phone number copied!");
  };

  const socialIcons = [
    {
      url: "https://oktayshakirov.com/assets/images/socials/github.png",
      alt: "Github",
      href: "https://github.com/Amanulla2022",
      target: "_blank",
    },
    {
      url: "https://oktayshakirov.com/assets/images/socials/linkedin.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/amanulla-mulla-000678232/",
      target: "_blank",
    },
    {
      url: "https://oktayshakirov.com/assets/images/socials/instagram.png",
      alt: "Instagram",
      target: "_blank",
    },
    {
      url: "https://oktayshakirov.com/assets/images/socials/twitter.png",
      alt: "Twitter",
      target: "_blank",
    },
  ];

  return (
    <div className="">
      <h1 className="text-5xl font-bold">Contact</h1>
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
      <div className="text-white leading-6 text-left bg-gradient-to-br from-teal-700 via-teal-600 to-teal-700 p-8 rounded-lg mb-8 flex flex-col items-center gap-4">
        <div className="w-full  ">
          <div className="flex  items-center text-white bg-teal-600 px-3 py-4 rounded-lg shadow-md mb-4 text-lg justify-around text-center">
            <div>
              <h3 className="mb-8">Email :</h3>
              <div className="flex items-center bg-hsla bg-opacity-50 px-5 py-2 rounded-lg shadow-md mb-10 text-sm gap-9">
                <p className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                  amanmulla167@gmail.com
                </p>
                <button
                  className="rounded px-3 py-1 cursor-pointer transition duration-300 text-yellow-400 bg-gray-700"
                  onClick={handleCopyEmail}
                >
                  Copy
                </button>
              </div>
            </div>
            <div>
              <h3 className="mb-8">Phone Number :</h3>
              <div className="flex items-center bg-hsla bg-opacity-50 px-5 py-2 rounded-lg shadow-md mb-10 text-sm gap-9">
                <p className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                  +91 9590397339
                </p>
                <button
                  className="rounded px-3 py-1 cursor-pointer transition duration-300 text-yellow-400 bg-gray-700"
                  onClick={handleCopyPhoneNumber}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center text-white bg-teal-600 px-3 rounded-lg shadow-md mb-4 py-4 text-lg">
            <h3 className="mb-8">Social Icons :</h3>
            <div className="flex items-center">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.href}
                  target={icon.target}
                  rel="noopener noreferrer"
                >
                  <img
                    className="w-20 h-20 mx-2"
                    src={icon.url}
                    alt={icon.alt}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
