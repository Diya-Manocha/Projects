import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Growth from "./components/Growth";
import HeroPage from "./components/HeroPage";
import InnovatorsSection from "./components/Innovation";
import Login from "./components/Login";
import Map from "./components/Map";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Route for homepage */}
        <Route
          path="/"
          element={
            <>
              <HeroPage />
              <Growth />
              <Services />
              <InnovatorsSection />
              <Testimonials />
              <Articles />
              <Form />
              <Map />
              <Footer />
            </>
          }
        />
        {/* Route for ProductPage */}
        <Route path="/product" element={<ProductPage />} />
        {/* Route for Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
