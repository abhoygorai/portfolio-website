import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Landing from "../pages/landing/Landing";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import Contact from "../pages/contact/Contact";
// import Experince from "../pages/description/Experience"
import PortflioDescription from "../pages/description/PortflioDescription";
import PageNotFound from "../pages/404/PageNotFound";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
          />
        }
      />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/portfolio/:id" element={<PortflioDescription />} />
      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<Navigate to="/page-not-found" />} />
    </Routes>
  );
};

export default AnimatedRoutes;
