import React from 'react';
import './Marketing.css';
import { hitFeatures } from '@/src/utils/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants } from '@/src/utils/animation';

const featureVariants = {
  offscreen: { scale: 0.5 },
  onscreen: {
    scale: 1,
    transition: { type: 'spring', duration: 1.5 },
  },
};

const detailVariants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { type: 'easeIn', duration: 1, delay: 0.7 },
  },
};

const HowItWorks = () => (
  <div className="hiw-wrapper">
    <div className="container">
      <div className="hiw-container">
        {/* Head */}
        <div className="hiw-head">
          <AnimatedSpan 
            variants={tagVariants} 
            className="tag"
            text="Marketing" 
          />
          <AnimatedSpan 
            variants={titleVariants} 
            className="title"
            text="Unleash Your Brand’s Potential" 
          />
        </div>

        {/* Features */}
        <div className="hiw-features">
          {hitFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="hiw-feature"
              variants={featureVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Left Side */}
              <motion.div
                className="detail"
                variants={detailVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.5 }}
              >
                <span className="des">0{i + 1}</span>
                <span className="sec-title">{feature.title}</span>
                <span className="text">{feature.des}</span>
              </motion.div>

              {/* Right Side */}
              <div className="icon">
                <Image
                  src={feature.icon}
                  width={128}
                  height={128}
                  alt="feature"
                  style={{ translate: '50% 0rem' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AnimatedSpan = ({ variants, className, text }) => (
  <motion.span
    variants={variants}
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.3 }}
    className={className}
  >
    {text}
  </motion.span>
);

export default HowItWorks;