import React, { Children } from "react";

export const Title_Component = ({ texto, remate }) => {
  return (
    <div className="bg-azul-claro p-4 rounded-xl w-max shadow">
      <h3 className="text-azul-oscuro">
        {texto} <span className="text-azul-vibrante font-bold  ">{remate}</span>
      </h3>
    </div>
  );
};
