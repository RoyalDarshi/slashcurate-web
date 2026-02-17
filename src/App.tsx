import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <Router>
      {/* Navigation now manages its own scroll state internally */}
      <Navigation />

      <Routes>
        <Route path="/"             element={<Home />} />
        <Route path="/about"        element={<About />} />
        <Route path="/services"     element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact"      element={<Contact />} />
      </Routes>

      <Footer />
      <BackToTop />
    </Router>
  );
}
