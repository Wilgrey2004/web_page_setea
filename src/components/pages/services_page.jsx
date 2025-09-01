import React from "react";
import { Card_Componen_Dart } from "../utils/Card_Componen_dart";
import { Title_Component } from "../title/title_Component";

//import imagenDeSetea from "../../assets/LogoSeteaHD.png";
import { Services_component_card } from "../services_Componenet/services_component_card";
import { Card_Componen } from "../utils/Card_Componen";
import { Article_component } from "../Articulo_component/article_component";
export const Services_page = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Card_Componen_Dart>
          <Title_Component
            texto={"Nuestros servicios en"}
            remate={"S.E.T.E.A"}
          ></Title_Component>

          {/* Este sera un componente nuevo. */}
          <div className="flex flex-col gap-5 items-center md:flex-row">
            <Services_component_card
              titulo={"Reparaciones de telefonos"}
              descripcion={"Reparamos casi cualquier dispositivo movil"}
              ImagenUrl={"https://i.postimg.cc/pd4mqCyg/image.png"}
              mensaje={"Quiero solicitar una reparacion"}
            ></Services_component_card>

            <Services_component_card
              titulo={"Instalacion de camaras"}
              descripcion={
                "Instalacion de camaras adomisilio con un servicio rapido y economico."
              }
              ImagenUrl={"https://i.postimg.cc/FsTsTpBD/image.png"}
              mensaje={"Quiero solicitar una instalacion de camaras."}
            ></Services_component_card>

            <Services_component_card
              titulo={"Venta de electronicos"}
              descripcion={
                "Puedes venir y ver nuestro gran catalogo de equipos y dispositivos"
              }
              ImagenUrl={"https://i.postimg.cc/gJzTtV5H/image.png"}
            ></Services_component_card>
          </div>
        </Card_Componen_Dart>

        <Article_component
          titulo_texto={"Hablemos un poco sobre nuestros "}
          titulo_remate={"Servicios"}
          contenido_parrafo={
            "En S.E.T.E.A cada servicio refleja nuestra pasión por la tecnología y el compromiso con nuestros clientes. 🌟 Desde la reparación de teléfonos, donde devolvemos la vida a tus dispositivos, hasta la instalación de cámaras de seguridad, diseñada para cuidar lo que más valoras, trabajamos con dedicación y detalle. Además, nuestra venta de electrónicos te abre las puertas a un mundo de innovación y calidad. En cada proyecto, ponemos el corazón y la experiencia para superar tus expectativas. 💙"
          }
          mensaje={"Quiero saber sobre los productos"}
        ></Article_component>
      </div>
    </>
  );
};
