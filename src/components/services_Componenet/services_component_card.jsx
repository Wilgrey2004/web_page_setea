import React from "react";

export const Services_component_card = ({
  titulo,
  ImagenUrl,
  descripcion,
  mensaje,
}) => {
  return (
    <a href={`https://wa.me/18495818773?text=` + mensaje} target="_blank">
      <div className="shadow-2xl  transition-shadow duration-300 hover:shadow-white flex flex-col items-center bg-azul-claro rounded-br-2xl p-4 rounded-tl-2xl ">
        <h3 className="font-bold text-xl text-azul-vibrante ">{titulo}</h3>
        <br />
        <img
          className="w-50 md:w-100 rounded-2xl"
          src={ImagenUrl}
          alt="Imagen del servicio"
        ></img>
        <br />
        <p className="text-center">{descripcion}</p>
      </div>
    </a>
  );
};
