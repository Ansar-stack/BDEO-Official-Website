import { Routes, Route } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Faqs from '../pages/Faqs'
import Contact from "../pages/Contact";
import About from "../pages/About";
import Team from "../pages/Team";
import WhatWeDo from "../pages/WhatWeDo";
import DonateNow from "../pages/DonateNow";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/support-us" element={<DonateNow />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
