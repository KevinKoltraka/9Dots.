"use client";

import React, { useState } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Link from 'next/link'; // For page navigation
import { Link as ScrollLink } from 'react-scroll'; // For in-page section scrolling

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState('');
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setNavStyle(latest > 0.2 ? 'sticky' : '');
    });

    const toggleMobileMenu = () => setMobileMenuOpened(!mobileMenuOpened);

    return (
        <nav className={`n-wrapper ${navStyle}`}>
            {/* Desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* Left side */}
                    <div className="n-logo">
                        <span>9Dots. Agency</span>
                    </div>

                    {/* Right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <NavLinks />
                        </div>
                        <ActionButton text="Start your journey" className="fund-button" />
                    </div>
                </div>
            </div>

            {/* Mobile version */}
            <div className="nm-container">
                {/* Logo */}
                <span>9Dots Agency</span>

                {/* Menu icon */}
                {mobileMenuOpened ? (
                    <RxCross2 size={30} onClick={toggleMobileMenu} />
                ) : (
                    <BiMenuAltRight size={30} onClick={toggleMobileMenu} />
                )}

                {/* Mobile menu */}
                <motion.div
                    className="nm-menu"
                    animate={{ x: mobileMenuOpened ? 0 : '-100%' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <NavLinks />
                    <ActionButton text="Start your journey" className="m-funded-button" />
                </motion.div>
            </div>
        </nav>
    );
};

// Extracted NavLinks for reusability and clarity
const NavLinks = () => (
    <>
        <ScrollLink to="wwd-wrapper" spy={true} smooth={true} offset={-50}>
            <span>About us</span>
        </ScrollLink>

        <Link href="/marketing" scroll={false}>
            <span>Marketing</span>
        </Link>

        <Link href="/recruiting" scroll={false}>
            <span>Recruiting</span>
        </Link>

        <Link href="/blog" scroll={false}>
            <span>Blog</span>
        </Link>

        <Link href="/portfolio" scroll={false}>
            <span>Portfolio</span>
        </Link>
    </>
);

// Reusable action button component
const ActionButton = ({ text, className }) => (
    <div className={className} style={{ color: 'white' }}>
        {text}
    </div>
);

export default Navbar;
