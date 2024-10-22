import React, { useState, useRef } from 'react';
import './Footer.css';
import EmailBox from '../EmailBox/EmailBox';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (platform) => {
    clearTimeout(timeoutRef.current);
    setHovered(platform);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 150);
  };

  const iconSize = 24; // Set your desired icon size here

  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Connect with Us Today!</span>
          <EmailBox />
          <hr />
          <div className="f-menu">
            <motion.a 
              href="https://wa.me/" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('whatsapp')}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            >
              <span style={{ opacity: hovered === 'whatsapp' ? 0 : 1, transition: 'opacity 0.2s ease' }}>WhatsApp</span>
              <span style={{ opacity: hovered === 'whatsapp' ? 1 : 0, transition: 'opacity 0.2s ease' }}>
                <FaWhatsapp size={iconSize} />
              </span>
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('instagram')}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            >
              <span style={{ opacity: hovered === 'instagram' ? 0 : 1, transition: 'opacity 0.2s ease' }}>Instagram</span>
              <span style={{ opacity: hovered === 'instagram' ? 1 : 0, transition: 'opacity 0.2s ease' }}>
                <FaInstagram size={iconSize} />
              </span>
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/your-profile" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('linkedin')}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            >
              <span style={{ opacity: hovered === 'linkedin' ? 0 : 1, transition: 'opacity 0.2s ease' }}>LinkedIn</span>
              <span style={{ opacity: hovered === 'linkedin' ? 1 : 0, transition: 'opacity 0.2s ease' }}>
                <FaLinkedin size={iconSize} />
              </span>
            </motion.a>
            <motion.a 
              href="https://www.tiktok.com/@your-username" 
              target="_blank" 
              rel="noopener noreferrer"
              onMouseEnter={() => handleMouseEnter('tiktok')}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeInOut" } }}
            >
              <span style={{ opacity: hovered === 'tiktok' ? 0 : 1, transition: 'opacity 0.2s ease' }}>TikTok</span>
              <span style={{ opacity: hovered === 'tiktok' ? 1 : 0, transition: 'opacity 0.2s ease' }}>
                <FaTiktok size={iconSize} />
              </span>
            </motion.a>
          </div>
          <hr />
          <span className='text'>Made with love by 9Dots Agency</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
