import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { PlanetDetails } from "./views/PlanetDetails";
import { CharacterDetails } from "./views/CharacterDetails";
import { VehicleDetails } from "./views/VehicleDetails";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/planet_details/:id" element={<PlanetDetails />} />
            <Route path="/character_details/:id" element={<CharacterDetails />} />
            <Route path="/vehicle_details/:id" element={<VehicleDetails />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);