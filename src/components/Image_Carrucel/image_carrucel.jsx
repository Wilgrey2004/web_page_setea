import { useEffect, useState } from "react";

export const Image_carrucel = () => {
  const [index_Image, setIndex_Image] = useState(0);
  const [fade, setFade] = useState(true);

  const list_images = [
    "https://i.postimg.cc/jqXJ21yd/image.png",
    "https://i.postimg.cc/wBL1p46z/image.png",
    "https://i.postimg.cc/yNHVF1Hq/image.png",
    "https://i.postimg.cc/6p5QS6Pd/image.png",
    "https://i.postimg.cc/hGNPfLtr/image.png",
    "https://i.postimg.cc/J0LrQRJH/image.png",
  ];

  // Funciones para botones
  // const oneMinusIndex = () => {
  //   setFade(false); // iniciar fade-out
  //   setTimeout(() => {
  //     setIndex_Image((prev) =>
  //       prev === 0 ? list_images.length - 1 : prev - 1
  //     );
  //     setFade(true); // iniciar fade-in
  //   }, 350); // mismo tiempo que duración en Tailwind
  // };

  const oneMoreIndex = () => {
    setFade(false);
    setTimeout(() => {
      setIndex_Image((prev) =>
        prev === list_images.length - 1 ? 0 : prev + 1
      );
      setFade(true);
    }, 300);
  };

  // Auto cambio
  useEffect(() => {
    const interval = setInterval(() => {
      oneMoreIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-10/12 items-center">
      <img
        src={list_images[index_Image]}
        alt="Imagen del carrusel"
        className={`w-10/12 h-64 object-cover rounded-lg shadow-xl shadow-blue-100 transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* <div className="flex gap-5 mt-3">
        <button
          onClick={oneMinusIndex}
          className="px-3 py-1 bg-gray-300 rounded-lg"
        >
          Anterior
        </button>
        <button
          onClick={oneMoreIndex}
          className="px-3 py-1 bg-gray-300 rounded-lg"
        >
          Siguiente
        </button>
      </div> */}
    </div>
  );
};
