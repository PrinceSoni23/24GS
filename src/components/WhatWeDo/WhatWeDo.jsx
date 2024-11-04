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
                    >Our Support</motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className='title'
                    >
                        {" "}
                        IT management with a comprehensive approach
                    </motion.span>
                    <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className='des'
                    >Here is how we Support</motion.span>
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
                            Premium All-Inclusive Support
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Comprehensive IT support under one affordable monthly rate, without hidden charges or disclaimers
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(0, 3).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className='block-feature' key={i}>
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
                           Proactive Support
                        </motion.span>
                        <motion.span 
                        variants={desVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className='text'>
                            Access to a dedicated team of technicians for remote assistance and discounted on-site support if necessary
                        </motion.span>
                        <div className="block-features">
                            {
                                features.slice(3, 6).map((feature, i)=> (
                                    <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
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
            </div>
        </div>
    </div>
  )
}

export default WhatWeDo