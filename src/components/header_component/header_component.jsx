import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header_component = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const changeIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const headerClasses = `
    bg-white rounded-br-3xl
    ${isOpen ? "flex flex-col p-6" : "hidden md:flex md:p-6 md:flex-row"}
  `;

  const navClasses = `
    justify-evenly
    ${isOpen ? "flex flex-col" : "md:flex-row"}
  `;

  const menuItems = [
    { name: "Inicio", path: "/web_page_setea" },
    { name: "Servicios", path: "/servicios" },
    { name: "Contacto", path: "/contacto" },
    { name: "Sobre nosotros", path: "/about" },
  ];

  return (
    <div className="w-full">
      <header className={headerClasses}>
        <nav className={navClasses}>
          <h1 className="text-blue-500 text-xl font-bold">S.E.T.A</h1>
          <ul className="flex flex-col space-y-2 md:space-x-4 md:flex-row">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={item.path}
                  className="relative hover:-translate-y-1 transition-all duration-75 ease-in hover:font-bold"
                >
                  <Link
                    to={item.path}
                    className={`${isActive ? "text-blue-500" : "text-black"}`}
                  >
                    {item.name}
                  </Link>
                  {/* Línea debajo */}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 transition-all duration-300 ${
                      isActive ? "bg-blue-500" : "bg-transparent"
                    } group-hover:bg-blue-500`}
                  ></span>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      <button
        className="md:hidden ml-auto mt-2 bg-blue-200/50 w-min p-2 rounded-2xl text-2xl  text-blue-500 shadow-lg hover:shadow-2xl"
        onClick={changeIsOpen}
      >
        {isOpen ? "X" : "="}
      </button>
    </div>
  );
};

export default Header_component;
