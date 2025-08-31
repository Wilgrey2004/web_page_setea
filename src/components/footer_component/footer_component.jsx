import React from "react";
import locoInstagram from "../../../public/instagrame_ico.svg";
import logowhatsapp from "../../../public/brand-whatsapp.svg";
import logolocation from "../../../public/map-pin.svg";
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
              src={locoInstagram}
              alt="intagrame ico"
              className="w-10 shawow-xl"
            />
          </a>

          <a
            href="https://wa.me/18495818773?utm_source=chatgpt.com"
            target="_blank"
          >
            <img
              src={logowhatsapp}
              alt="intagrame ico"
              className="w-10 shawow-xl"
            />
          </a>

          <a href="https://maps.app.goo.gl/HpfQy7WZFPFwCkUB7" target="_blank">
            <img
              src={logolocation}
              alt="intagrame ico"
              className="w-10 shawow-xl"
            />
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
