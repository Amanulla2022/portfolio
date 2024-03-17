import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <header className="mb-8">
      <nav className="absolute top-16 right-5 left-auto bottom-auto w-1/3 border-t border-r p-4 h-16 bg-gray-800 text-white rounded-bl-full rounded-tr-full px-10 shadow-none flex items-center">
        <ul className="flex gap-8">
          <li>
            <Link
              to="/"
              className={activeLink === "/" ? "text-yellow-400" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/certificate"
              className={activeLink === "/certificate" ? "text-yellow-400" : ""}
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={activeLink === "/project" ? "text-yellow-400" : ""}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/experience"
              className={activeLink === "/experience" ? "text-yellow-400" : ""}
            >
              More
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={activeLink === "/contact" ? "text-yellow-400" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
