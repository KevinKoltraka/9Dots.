"use client";

import React from 'react';
import './Hero.css';
import EmailBox from '../EmailBox/EmailBox';
import { HeroData } from '@/src/utils/data';
import { motion } from 'framer-motion';

const Hero = () => {
  const pillVariants = (delay = 0) => ({
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = {
    initial: { y: "18rem" },
    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  };

  const renderPersonRow = (start, end) =>
    HeroData.slice(start, end).map((person, index) => (
      <div className="person-pill" key={index}>
        <motion.div
          initial="initial"
          animate="animate"
          variants={pillVariants(index * 0.1)} // Adding delay for staggered animation
          style={{ backgroundColor: person.bg }}
          className="person-pill-bg"
        >
          <motion.img
            initial="initial"
            animate="animate"
            variants={imgVariants}
            src={person.src}
            alt={`person-${index}`}
          />
        </motion.div>
      </div>
    ));

  return (
    <div className="h-wrapper">
      <div className="container">
        <div className="h-container">
          {/* Left Side */}
          <div className="h-left">
            <div className="image-row">{renderPersonRow(0, 3)}</div>
            <div className="image-row">{renderPersonRow(3, 6)}</div>
          </div>

          {/* Right Side */}
          <div className="h-right">
            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
