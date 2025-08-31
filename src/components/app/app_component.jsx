import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header_component from "../header_component/header_component";
import { Home_page } from "../pages/home_page";
import { Services_page } from "../pages/services_page";
import { Contact_page } from "../pages/contact_page";
import { About_page } from "../pages/about_page";
import { Footer_component } from "../footer_component/footer_component";

export const App_component = () => {
  return (
    <>
      <Header_component></Header_component>
      <br />
      <Routes>
        <Route path="/web_page_setea" element={<Home_page />} />
        <Route path="/servicios" element={<Services_page />} />
        <Route path="/contacto" element={<Contact_page />} />
        <Route path="/about" element={<About_page />} />
      </Routes>
      <Footer_component></Footer_component>
    </>
  );
};

export default App_component;
