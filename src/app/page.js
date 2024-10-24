"use client"

import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import WhatWeDo from '@/src/components/AboutUs/AboutUs';
import OurDiff from '@/src/components/Our associates/OurAssociates';
import { motion, useAnimation } from 'framer-motion';
import HowItWorks from '@/src/components/Marketing/Marketing';
import WhoWeInvest from '@/src/components/Recruiting/Recruiting';
import Testimonials from '@/src/components/Testimonials/Testimonials';
import Footer from '@/src/components/Footer/Footer';

export default function Home() {

  const controls = useAnimation()

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--secondary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>
      <HowItWorks />

      <motion.div
      onViewportEnter={()=> 
        controls.start({
          backgroundColor: "var(--primary-color)",
        })
      } 
      onViewportLeave={()=> controls.start({
        backgroundColor: "white",
      })}
      viewport={{amount: 0.4}}
      >
        <WhoWeInvest />
      </motion.div>

      <Testimonials />
      <Footer />
    </motion.div>
  );
}