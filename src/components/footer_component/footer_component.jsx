import React from "react";
import mapIcon from "../../assets/map-pin.svg";
import whattIcon from "../../assets/brand-whatsapp.svg";
import instaIcon from "../../assets/instagrame_ico.svg";
export const Footer_component = () => {
  return (
    <footer className="w-screen   bg-azul-claro p-10 mt-10 rounded-tl-2xl">
      <div className="flex  flex-col  items-center">
        <h4 className="text-xl font-bold text-azul-vibrante shadow-2xl">
          S.E.T.E.A
        </h4>

        <div className="flex">
          <a href="https://www.instagram.com/setea_oficial/" target="_blank">
            <img
              src={instaIcon}
              alt="intagrame ico"
              className="w-10 shawow-xl"
            />
          </a>

          <a
            href="https://wa.me/18495818773?utm_source=chatgpt.com"
            target="_blank"
          >
            <img
              src={whattIcon}
              alt="intagrame ico"
              className="w-10 shawow-xl"
            />
          </a>

          <a href="https://maps.app.goo.gl/1D6wx7bt3Qgc5cqQA" target="_blank">
            <img src={mapIcon} alt="intagrame ico" className="w-10 shawow-xl" />
          </a>
        </div>
        <p className="font-bold">
          Donde te <span className="text-azul-vibrante">seteamos</span> a nivel
          tecnologico!
        </p>
      </div>
    </footer>
  );
};
