import React from "react";

export const Avatar_information = ({ icono, nombre, cargo }) => {
  return (
    <div className="hover:-translate-y-1 transition-all duration-150 flex flex-row rounded-br-xl rounded-tl-xl items-center shadow-2xl px-10 py-4 bg-azul-vibrante w-max h-min ">
      <img
        src={icono} //
        alt="Icono"
        className="rounded-full h-20"
      />
      <div className="flex flex-col gap-2">
        <h4 className="text-azul-claro">{nombre}</h4>
        <p className="text-azul-claro ">{cargo}</p>
      </div>
    </div>
  );
};
