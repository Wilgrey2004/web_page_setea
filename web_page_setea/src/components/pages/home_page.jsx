import React from "react";
import { Card_Componen } from "../utils/Card_Componen";
import { Image_carrucel } from "../Image_Carrucel/image_carrucel";
import { Title_Component } from "../title/title_Component";
import { Avatar_information } from "../Avatar_Information/avatar_information";
import { Card_Componen_Dart } from "../utils/Card_Componen_dart";
import { Article_component } from "../Articulo_component/article_component";

export const Home_page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-5">
      {/* <Title_Component texto={"Inicio"}></Title_Component> */}
      <Card_Componen_Dart>
        <Image_carrucel></Image_carrucel>
      </Card_Componen_Dart>

      <Article_component
        titulo_texto={"Un poco sobre"}
        titulo_remate={" de nosotros"}
        contenido_parrafo={
          "Lorem ipsum dolor sit amet consectetur adipiscing elit dictumst elementum, etiam vel mus magnis eleifend ut feugiat vitae mattis, vehicula tempus tincidunt rhoncus commodo purus molestie sociosqu. Velit et eleifend volutpat convallis tempor arcu nullam, habitasse iaculis lacus massa etiam sociis. Eget a mattis fringilla nec euismod cubilia scelerisque dis eu nulla, placerat pulvinar facilisis nostra urna gravida penatibus himenaeos sodales."
        }
      ></Article_component>

      <Card_Componen_Dart>
        <div className="flex flex-col">
          <Title_Component
            texto={"Quienes conforman nuestro"}
            remate={"Equipo?"}
          ></Title_Component>
          <br />
          <div className=" flex flex-col gap-4 flex-wrap md:flex-row">
            <Avatar_information
              icono={"https://i.postimg.cc/L4J3WHMc/image.png"}
              nombre={"Wilgrey Ravelo Cruz"}
              cargo={"Desarrollador full stack"}
            ></Avatar_information>

            <Avatar_information
              icono={"https://i.postimg.cc/L4J3WHMc/image.png"}
              nombre={"Wilgrey Ravelo Cruz"}
              cargo={"Desarrollador full stack"}
            ></Avatar_information>

            <Avatar_information
              icono={"https://i.postimg.cc/L4J3WHMc/image.png"}
              nombre={"Wilgrey Ravelo Cruz"}
              cargo={"Desarrollador full stack"}
            ></Avatar_information>

            <Avatar_information
              icono={"https://i.postimg.cc/L4J3WHMc/image.png"}
              nombre={"Wilgrey Ravelo Cruz"}
              cargo={"Desarrollador full stack"}
            ></Avatar_information>

            <Avatar_information
              icono={"https://i.postimg.cc/L4J3WHMc/image.png"}
              nombre={"Wilgrey Ravelo Cruz"}
              cargo={"Desarrollador full stack"}
            ></Avatar_information>
          </div>
        </div>
      </Card_Componen_Dart>
    </div>
  );
};
