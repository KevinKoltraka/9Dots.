'use client'

import React from 'react'
import './AboutUs.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const AnimatedText = ({ children, variants, className }) => (
  <motion.span
    initial="offscreen"
    whileInView="onscreen"
    variants={variants}
    className={className}
  >
    {children}
  </motion.span>
);

const FeatureBlock = ({ feature }) => (
  <motion.div
    initial="offscreen"
    whileInView="onscreen"
    variants={containerVariants(feature.index * 0.1)}
    className='block-feature'
    key={feature.index}
  >
    <Image src={feature.icon} alt='feature' width={60} height={60} />
    <span>{feature.title}</span>
  </motion.div>
);

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* Head of section */}
          <div className="wwd-head">
            <AnimatedText variants={tagVariants} className='tag'>WHO ARE WE?</AnimatedText>
            <AnimatedText variants={titleVariants} className='title'>
              Empowering ideas and inspiring change together!
            </AnimatedText>
            <AnimatedText variants={desVariants} className='des' style={{ color: 'white' }}>
              Start Your Journey with Us!
            </AnimatedText>
          </div>

          {/* Two blocks */}
          <div className="wwd-blocks">
            {['Our vision', 'Our mission', 'About Us'].map((sectionTitle, index) => {
              const featureStart = index * 3;
              const featureEnd = featureStart + 3;
              const description = index === 0
                ? "9Dots Agency is dedicated to pushing the boundaries of digital marketing through creativity and innovation. We strive to overcome the limitations of traditional marketing strategies, offering fresh and dynamic approaches for business growth. By leveraging our expertise in key disciplines—such as SEO, design, social media management, programming, Google Ads, and multimedia—9Dots aims to elevate businesses to new heights."
                : index === 1
                  ? "At the core of the mission of 9Dots Agency lies the empowerment of businesses to achieve measurable success through personalized and innovative marketing solutions. Leveraging the combined expertise of 10 dedicated professionals, 9Dots Agency creates strategies customized to match each customers unique market. Under the direction of Georgina Maksuti, with more than 8 years of experience in digital marketing, 9Dots aims to be a catalyst for transformation, driving growth and elevating brands through the most advanced digital tools and approaches."
                  : "At 9Dots Agency, we believe that every brands success starts with a strong foundation and a strategic, personalized approach. We develop marketing solutions that not only align with our clients goals but also exceed them by employing global best practices and the most advanced technologies. Each project we undertake is a collaborative effort, meticulously focused on data, creativity, and innovation, ensuring that every campaign delivers a lasting impact.";

              return (
                <div className="wwd-block" key={index}>
                  <AnimatedText variants={titleVariants} className='sec-title'>{sectionTitle}</AnimatedText>
                  <AnimatedText variants={desVariants} className='text'>{description}</AnimatedText>
                  <div className="block-features">
                    {features.slice(featureStart, featureEnd).map((feature, i) => (
                      <FeatureBlock feature={{ ...feature, index: i }} key={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Support block */}
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            {/* Left side */}
            <div>
              <span className="sec-title">Why Choose 9Dots Agency?</span>
              <span className="des">Precision Solutions for Growth – Marketing & Recruitment, Perfectly Aligned.</span>
            </div>

            {/* Right side */}
            <div>
              {['• Dual Expertise: Seamlessly integrated Marketing and Recruitment services to grow your brand and build your team, all in one place.',
                '• Tailored Solutions: Personalized strategies that address your unique challenges, ensuring impactful and measurable results.'].map((text, index) => (
                  <span className='text' style={{ color: 'black' }} key={index}>{text}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo;
