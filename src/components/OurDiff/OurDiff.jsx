import React from 'react'
import './OurDiff.css'
import { ourDiffFeatures } from '@/src/utils/data'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animation'

const OurDiff = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                {/* head */}
                <div className="od-head">
                    <motion.span 
                    variants={tagVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='tag'>
                        Our associates
                    </motion.span>
                    <motion.span 
                    variants={titleVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='title
                    '>
                        Collaborate, Innovate, Achieve
                    </motion.span>
                    <motion.span 
                    variants={desVariants}
                    initial="offscreen"
                    whileInView={"onscreen"}
                    className='text'>
                        "United by our shared goals, we leverage our diverse strengths to create impactful solutions.
                        <br /> Together, we turn challenges into opportunities, driving success for all."
                    </motion.span>
                </div>
                {/* features */}
                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature, i)=> (
                            <motion.div 
                            variants={containerVariants((i + 1) * 0.1)}
                            initial="offscreen"
                            whileInView="onscreen"
                            key={i} className='od-feature'>
                                <Image src={feature.icon} alt="feature" width={128} height={128} />
                                <span className='sec-title'>{feature.title}</span>
                                <span className='text'>{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff