import React from "react";

export const Card_Componen_Dart = ({ children }) => {
  return (
    <div className=" w-10/12 h-min bg-azul-oscuro rounded-xl shadow-2xl p-4 flex flex-col items-center">
      {children}

      <span className="bg-azul-claro h-2 w-2 rounded-full self-end-safe animate-ping"></span>
    </div>
  );
};
