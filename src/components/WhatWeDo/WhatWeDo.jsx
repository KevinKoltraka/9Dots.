'use client'

import React from 'react'
import './WhatWeDo.css'
import { features } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
        <div className="container">
            <div className="wwd-container">
                {/* head of section */}
                <div className="wwd-head">
                    <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className='tag'
                    >
                        WHO ARE WE?
                    </motion.span>
                    <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className='title'
                    >
                        Empowering ideas and inspiring change together!
                    </motion.span>
                    <motion.span
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className='des'
                        style={{ color: 'white' }}
                    >
                        Start Your Journey with Us!
                    </motion.span>
                </div>

                {/* two blocks */}
                <div className="wwd-blocks">
                    {/* first block */}
                    <div className="wwd-block">
                        <motion.span 
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'>
                            Our vision
                        </motion.span>
                        <motion.span 
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='text'>
                            9Dots Agency is dedicated to pushing the boundaries of digital marketing through creativity and innovation. We strive to overcome the limitations of traditional marketing strategies, offering fresh and dynamic approaches for business growth. By leveraging our expertise in key disciplines—such as SEO, design, social media management, programming, Google Ads, and multimedia—9Dots aims to elevate businesses to new heights. 
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(0, 3).map((feature, i) => (
                                    <motion.div 
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        variants={containerVariants((i + 1) * 0.1)}
                                        className='block-feature' 
                                        key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    {/* second block */}
                    <div className="wwd-block">
                        <motion.span 
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'>
                            Our mission
                        </motion.span>
                        <motion.span 
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='text'>
                            At the core of the mission of 9Dots Agency lies the empowerment of businesses to achieve measurable success through personalized and innovative marketing solutions. Leveraging the combined expertise of 10 dedicated professionals, 9Dots Agency creates strategies customized to match each customer's unique market. Under the direction of Georgina Maksuti, with more than 8 years of experience in digital marketing, 9Dots aims to be a catalyst for transformation, driving growth and elevating brands through the most advanced digital tools and approaches. The agency is driven by a passion to help businesses go beyond borders and lead their marketing to a new level.
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(3, 6).map((feature, i) => (
                                    <motion.div 
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        variants={containerVariants((i + 1) * 0.1)}
                                        className='block-feature' 
                                        key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    {/* third block */}
                    <div className="wwd-block">
                        <motion.span 
                            variants={titleVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='sec-title'>
                            About Us
                        </motion.span>
                        <motion.span 
                            variants={desVariants}
                            initial="offscreen"
                            whileInView={"onscreen"}
                            className='text'>
                            At 9Dots Agency, we believe that every brand's success starts with a strong foundation and a strategic, personalized approach. We develop marketing solutions that not only align with our clients' goals but also exceed them by employing global best practices and the most advanced technologies. Each project we undertake is a collaborative effort, meticulously focused on data, creativity, and innovation, ensuring that every campaign delivers a lasting impact.

                            Our diverse team of experts spans various fields, guaranteeing that every aspect of your digital presence benefits from our comprehensive expertise. From strategic planning to execution, we work closely with you to craft tailored solutions that resonate with your target audience.

                            At 9Dots, we are more than just a marketing agency; we are your trusted partners on the path to sustainable growth and a leading position in the global market. Our commitment to excellence and innovation drives us to stay ahead of industry trends, allowing us to create effective strategies that adapt to the ever-changing digital landscape. Together, we can navigate the complexities of marketing and achieve remarkable results for your brand.            
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(6, 9).map((feature, i) => (
                                    <motion.div 
                                        initial="offscreen"
                                        whileInView={"onscreen"}
                                        variants={containerVariants((i + 1) * 0.1)}
                                        className='block-feature' 
                                        key={i}>
                                        <Image src={feature.icon} alt='feature' width={60} height={60} />
                                        <span>{feature.title}</span>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                {/* support block */}
                <motion.div 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={containerVariants(0.3)}
                    className="wwd-support">
                    {/* left side */}
                    <div>
                        <span className="sec-title">
                        Why Choose 9Dots Agency?
                        </span>
                        <span className="des">
                        Precision Solutions for Growth – Marketing & Recruitment, Perfectly Aligned.
                        </span>
                    </div>

                    {/* right side */}
                    <div>
                        <span className='text' style={{ color: 'black' }}>
                        • Dual Expertise: Seamlessly integrated Marketing and Recruitment services to grow your brand and build your team, all in one place.
                        </span>
                        <span className='text' style={{ color: 'black' }}>
                        • Tailored Solutions: Personalized strategies that address your unique challenges, ensuring impactful and measurable results.
                        </span>
                    </div>
                </motion.div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo;
