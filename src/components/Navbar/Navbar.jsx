"use client";

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { BiMenuAltRight } from 'react-icons/bi';
import { RxCross2 } from 'react-icons/rx';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Add a check to ensure the scroll position is only set if the component is mounted
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("");
        }
    });

    // Adding a useEffect to log the navStyle and ensure it's set correctly
    useEffect(() => {
        console.log("Navbar style changed:", navStyle);
    }, [navStyle]);

    return (
        <motion.div className={`n-wrapper ${navStyle}`}>
            {/* desktop version */}
            <div className="container">
                <div className="n-container">
                    {/* left side */}
                    <div className="n-logo">
                        <a href="/" aria-label="COTEK TECH Logo"> {/* Change the href value to your desired URL */}
                            <img src="/logo7.png" alt="COTEK TECH Logo" />
                        </a>
                    </div>

                    {/* right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <ScrollLink to="wwd-wrapper" spy={true} smooth={true}>
                                <span>Our Support</span>
                            </ScrollLink>
                            <Link href="/services">
                                <span>Services</span>
                            </Link>
                            <Link href="/TC">
                                <span>Terms And Conditions</span>
                            </Link>
                            <ScrollLink to="t-wrapper" spy smooth offset={100}>
                                <span>Testimonials</span>
                            </ScrollLink>
                        </div>
                        <div className="fund-button">
                            <a href="/Contact" aria-label="Get In Touch"> {/* Change the href value to your desired URL */}
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile version */}
            <div className="nm-container">
                {/* logo */}
                <a href="/" aria-label="COTEK TECH Logo"> {/* Change the href value to your desired URL */}
                    <img src="/logo7.png" alt="COTEK TECH Logo" />
                </a>

                {/* menu icon */}
                {
                    !mobileMenuOpened ?
                        <BiMenuAltRight
                            size={30}
                            onClick={() => setMobileMenuOpened(true)}
                        /> :
                        <RxCross2
                            size={30}
                            onClick={() => setMobileMenuOpened(false)}
                        />
                }

                {/* mobile menu */}
                <div className="nm-menu"
                    style={{ transform: mobileMenuOpened ? "translateX(0%)" : "translateX(-100%)" }} // Updated to hide menu when not opened
                >
                    <ScrollLink to="wwd-wrapper" spy smooth>
                        <span>Our Support</span>
                    </ScrollLink>
                    <Link href="/services" >
                        <span>Services</span>
                    </Link>
                    <ScrollLink to="wwi-wrapper" spy smooth>
                        <span>Who we Partner with</span>
                    </ScrollLink>
                    <ScrollLink to="t-wrapper" spy smooth>
                        <span>Testimonials</span>
                    </ScrollLink>
                    <div className="m-funded-button">
                        <a href="/Contact" aria-label="Get In Touch"> {/* Change to your desired URL */}
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;
