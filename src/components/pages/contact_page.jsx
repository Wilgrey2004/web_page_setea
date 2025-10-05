import React from "react";
import { Card_Componen } from "../utils/Card_Componen";
import { Title_Component } from "../title/title_Component";
import wattsapIcon from "../../assets/brand-whatsapp.svg";
import instagrameIcon from "../../assets/instagrame_ico.svg";
import phoneIcon from "../../assets/phone.svg";
import { Card_Componen_Dart } from "../utils/Card_Componen_dart";
import Contact_card_component from "../contact_card_component/contact_card_component";
import { Article_component } from "../Articulo_component/article_component";

export const Contact_page = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full gap-10">
      <Card_Componen_Dart>
        <Title_Component
          texto={"Puedes contactar con nosotros por las siguientes"}
          remate={"Vias"}
        ></Title_Component>
        <div className="flex flex-col md:flex-row justify-evenly gap-5">
          {/* Esto sera un componente a futuro */}

          <Contact_card_component
            linkSocialMedia={"https://wa.me/18495818773?utm_source=chatgpt.com"}
            iconApp={wattsapIcon}
            socialMediaName={"Whattsap"}
            color={"text-green-500"}
            colorBorder={"border-green-500"}
            colorShadow={"shadow-green-400/50"}
          ></Contact_card_component>

          <Contact_card_component
            linkSocialMedia={"https://www.instagram.com/setea_oficial/"}
            iconApp={instagrameIcon}
            socialMediaName={"instagrame"}
            color={"text-pink-500"}
            colorBorder={"border-pink-500"}
            colorShadow={"shadow-pink-400/50"}
          ></Contact_card_component>

          <Contact_card_component
            iconApp={phoneIcon}
            socialMediaName={"+1 (849) 581-8773"}
            color={"text-blue-500"}
            colorBorder={"border-blue-500"}
            colorShadow={"shadow-blue-400/50"}
          ></Contact_card_component>
        </div>
      </Card_Componen_Dart>

      <Card_Componen>
        <Article_component
          titulo_texto={"Horarios de "}
          titulo_remate={"contacto"}
          contenido_parrafo={`📞 Contáctanos fácilmente
          En nuestra empresa tecnológica estamos siempre disponibles para ti. Ofrecemos servicios de reparación de equipos, instalación de cámaras de seguridad y venta de dispositivos tecnológicos.
          Nuestro horario es:
          Lunes a viernes: de 8:00 a.m. a 6:00 p.m.
          Sábados y domingos: de 8:00 a.m. a 1:00 p.m.
          Puedes comunicarte con nosotros en cualquier momento dentro de este horario y con gusto te atenderemos. ¡Estamos aquí para brindarte soluciones rápidas y confiables! 🚀`}
        ></Article_component>
      </Card_Componen>

      <Card_Componen_Dart>
        <Article_component
          titulo_texto={"Donde te seteamos a nivel tecnologico"}
          titulo_remate={" S.E.T.E.A"}
        ></Article_component>
      </Card_Componen_Dart>
    </div>
  );
};
