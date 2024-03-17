import React from "react";
import { CertificatesData } from "./CertificateData";

const Certificates = () => {
  return (
    <div className=" ">
      <h1 className="text-5xl font-bold">Certificates</h1>
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
      <div className="mb-8">
        {CertificatesData.map((data, index) => {
          return (
            <div key={index} className="mb-10">
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="bg-gray-900 rounded-lg w-12 h-12 flex justify-center items-center text-hsla-45-100-72 shadow-md">
                  <img src={data.icon} alt={data.title} />
                </div>
                <svg
                  className="absolute left-6 top-20 transform -translate-x-1/2 -translate-y-1/2"
                  height="40"
                  width="40"
                >
                  <circle cx="20" cy="20" r="8" fill="yellow" />
                </svg>
                <h3 className="text-2xl text-white pl-4">{data.title}</h3>
              </div>
              {data.certificates.map((certificate, certIndex) => {
                return (
                  <div
                    key={certIndex}
                    className="relative  text-base mb-5 ml-16"
                  >
                    <div className="absolute -left-[43px] -top-6 h-6 w-1 bg-gray-400"></div>
                    <div className="absolute -left-[43px] top-4 h-full w-1 bg-gray-400"></div>

                    <h4 className="text-lg mb-7 text-white">
                      {certificate.title}
                    </h4>
                    <p className="text-hsl-0-0-84 font-light leading-6 max-w-700 text-gray-500 mb-2">
                      {certificate.source}
                    </p>

                    <img
                      className="block rounded-md border w-56 h-auto overflow-hidden"
                      src={certificate.img}
                      alt={certificate.title}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
