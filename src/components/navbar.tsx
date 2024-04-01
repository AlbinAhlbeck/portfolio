"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Hover from '../components/hover'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const closeMenu = () => {
        if(isOpen)
        setIsOpen(false);
    };

    useEffect(() => {
        setNavHeight(isOpen ? menuRef.current.scrollHeight : 0);
    }, [isOpen]);

    const menuItems = [
        { text: "Home", description: "Go back to the home page", link: "/" },
        { text: "Projects", description: "Look closer on projects that I have worked on", link: "/projects" },
        // // { text: "Work and education", description: "My work and education background", link: "/work" }, TODO
    ];

    return (
        <nav onClick={closeMenu} className="bg-black text-white p-4 font-mono border-b border-primary fixed w-full pb-10 top-0 z-50">
            <motion.div
                initial={false}
                animate={{ height: navHeight, backgroundColor: "#000" }}
                transition={{ duration: 0.4 }}
                className="w-full"
            >
                {/* Move the background container inside the motion.div */}
                <div className="w-full">
                    <div className="flex gap-4 items-center justify-between mx-2 h-full text-lg mb-8">
                        <ul className="flex">
                            <li onClick={toggleMenu} className="mr-6 flex gap-1 cursor-pointer">
                                <span>
                                    {isOpen ? "Close" : "Menu"}
                                </span>
                                <span>{isOpen ? '▲' : '▼'}</span>
                            </li>
                        </ul>
                        <Hover message="albin.ahlbeck@gmail.com">Contact me</Hover>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-white py-8 px-4 text-xl lg:text-3xl"
                                ref={menuRef}
                            >
                                <div className="flex flex-col gap-8 w-fit min-h-full">
                                    {menuItems.map((item, index) => (
                                        <Link href={item.link} key={index}>
                                            <motion.li
                                                initial={{ opacity: 0, y: -20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -20 }}
                                                transition={{ delay: 0, duration: 0.4 }}
                                                className="mb-4 grid grid-cols-2 gap-4 items-center"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <a className="text-white hover:text-gray-300 cursor-pointer">{item.text}</a>
                                                <span className="text-gray-300 text-sm">{item.description}</span>
                                            </motion.li>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </nav>
    );
};


export default Navbar;
