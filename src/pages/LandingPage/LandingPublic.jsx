import FooterUpper from "../../components/FooterUpper";
import Footer from "../../components/Footer";

import FAQ from "./components/public/FAQ";
import FeaturedProduct from "./components/public/FeaturedProduct";
import FeaturedChip from "./components/public/FeaturedChip";
import EcoSystem from "./components/public/EcoSystem";
import Features from "./components/public/Features";
import Products from "./components/public/Products";

export default function LandingPrivate() {
  return (
    <div className="leading-normal tracking-normal text-suitefontblack mx-10 md:mx-0 bg-gray-50 bg-fixed">
      {/* 1st section - Product */}
      <section className="pt-52">
        <Products />
      </section>

      {/* 2nd section - Feature */}
      <section className="bg-gray-200 p-20">
        <Features />
      </section>

      {/* 3rd section - Ecosystem */}
      <section className="pt-20">
        <EcoSystem />
      </section>

      {/* 4th section - Featured Product & FAQ */}
      <section className="pt-20">
        <FeaturedChip />

        <div className="bg-gradient-to-b from-teal-100 to-gray-50 pb-10">
          <FeaturedProduct />
          <FAQ />
        </div>
      </section>

      {/* 6th section - Semi Footer */}
      <FooterUpper />

      {/* 7th section - Footer */}
      <Footer />
    </div>
  );
}
