import React, { useState, useRef } from 'react';
import './Footer.css';
import EmailBox from '../EmailBox/EmailBox';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = {
  whatsapp: 'https://wa.me/',
  instagram: 'https://www.instagram.com/your-username',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  tiktok: 'https://www.tiktok.com/@your-username',
};

const icons = {
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  tiktok: FaTiktok,
};

const Footer = () => {
  const [hovered, setHovered] = useState(null);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (platform) => {
    clearTimeout(timeoutRef.current);
    setHovered(platform);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setHovered(null), 150);
  };

  const iconSize = 24;

  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Connect with Us Today!</span>
          <EmailBox />
          <hr />
          <div className="f-menu">
            {Object.keys(socialLinks).map((platform) => {
              const Icon = icons[platform];

              return (
                <motion.a
                  key={platform}
                  href={socialLinks[platform]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => handleMouseEnter(platform)}
                  onMouseLeave={handleMouseLeave}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2, ease: 'easeInOut' },
                  }}
                  className="f-menu-item"
                >
                  <span
                    style={{
                      opacity: hovered === platform ? 1 : 0,
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    <Icon size={iconSize} />
                  </span>
                  <span
                    style={{
                      opacity: hovered === platform ? 0 : 1,
                      transition: 'opacity 0.2s ease',
                    }}
                  >
                    {platform.charAt(0).toUpperCase() + platform.slice(1)}
                  </span>
                </motion.a>
              );
            })}
          </div>
          <hr />
          <span className="text">Made with love by 9Dots Agency</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
