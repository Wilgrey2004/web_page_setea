import React from "react";

export const Card_Componen = ({ children }) => {
  return (
    <div className=" w-10/12 h-min bg-azul-claro rounded-xl shadow-2xl p-4 flex flex-col items-center">
      {children}

      <span className="bg-azul h-2 w-2 rounded-full self-end-safe animate-ping"></span>
    </div>
  );
};
