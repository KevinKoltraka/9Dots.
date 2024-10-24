"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/src/components/Navbar/Navbar';
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/AboutUs/AboutUs';
import OurDiff from '@/src/components/Our associates/OurAssociates';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';
import './page.css';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    // Reset background color to prevent issues on rerenders or refresh
    controls.set({ backgroundColor: "white" });
  }, [controls]);

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--secondary-color)",
            transition: { duration: 0.5, ease: "easeInOut" }, // Smooth transition
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
            transition: { duration: 0.5, ease: "easeInOut" }, // Matching transition
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <OurDiff />
      </motion.div>

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
            transition: { duration: 0.6, ease: "easeInOut" }, // Slightly different transition
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
            transition: { duration: 0.6, ease: "easeInOut" },
          })
        }
        viewport={{ amount: 0.4 }}
      >
        {/* Add content here if needed */}
      </motion.div>

      <Testimonials />
      <Footer />
    </motion.div>
  );
}
