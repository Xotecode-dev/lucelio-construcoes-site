import React, {useEffect} from "react";
import HeroSection from "../components/home/HeroSection.jsx";
import WhyChooseUs from "../components/home/WhyChooseUs.jsx";
import ProductCategories from "../components/home/ProductCategories.jsx";
import BrandsPartners from "../components/home/BrandsPartners.jsx";
import Testimonials from "../components/home/Testimonials.jsx";
import { colors } from "../components/theme/colors.jsx";

export default function Home() {
  useEffect(() => {
      const root = document.documentElement;
  
      root.style.setProperty('--primary-light', colors.primary.light);
      root.style.setProperty('--primary-main', colors.primary.main);
      root.style.setProperty('--primary-dark', colors.primary.dark);

      root.style.setProperty('--accent-main', colors.accent.main);
      root.style.setProperty('--accent-dark', colors.accent.dark);

      root.style.setProperty('--color-warning', colors.warning);

      root.style.setProperty('--neutral-lightest', colors.neutral.lightest);
      root.style.setProperty('--neutral-main', colors.neutral.light);
      root.style.setProperty('--neutral-dark', colors.neutral.dark);
      root.style.setProperty('--neutral-dark', colors.neutral.darkest);

      root.style.setProperty('--color-success', colors.success);
      root.style.setProperty('--color-error', colors.error);
      root.style.setProperty('--color-whatsapp', colors.whatsapp);
      root.style.setProperty('--color-white', colors.white);
      root.style.setProperty('--color-black', colors.black);

    }, []);
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ProductCategories />
      <BrandsPartners />
      <Testimonials />
    </div>
  );
}