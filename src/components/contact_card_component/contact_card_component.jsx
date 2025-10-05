import React from "react";

function Contact_card_component({
  iconApp,
  color,
  colorBorder,
  colorShadow,
  socialMediaName,
  linkSocialMedia,
}) {
  return (
    <a href={linkSocialMedia} target="_blank">
      <div
        className={`flex gap-5 p-4 rounded-2xl  cursor-pointer bg-white   transition-all  duration-100 ${colorBorder} ${colorShadow}  border  shadow-xl hover:-translate-y-1`}
      >
        <img src={iconApp} alt="Ico message" />
        <h3>
          Mediante{" "}
          <span className={`font-bold ${color}`}>{socialMediaName}</span>
        </h3>
      </div>
    </a>
  );
}

export default Contact_card_component;
