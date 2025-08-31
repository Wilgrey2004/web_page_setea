import React from "react";
import { Title_Component } from "../title/title_Component";
export const Article_component = ({
  titulo_texto,
  titulo_remate,
  contenido_parrafo,
}) => {
  return (
    <div className="bg-gray-500 w-10/12 p-6 m-5 rounded-bl-2xl rounded-tr-2xl text-white flex flex-col gap-5 ">
      <Title_Component
        texto={titulo_texto}
        remate={titulo_remate}
      ></Title_Component>
      <p className="text-balance">{contenido_parrafo}</p>
    </div>
  );
};
