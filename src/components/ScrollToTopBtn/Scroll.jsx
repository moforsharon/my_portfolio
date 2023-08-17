import React, { useState, useEffect } from 'react';
import "./Scroll.css"

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            id="scroll-up"
            className={`scroll-to-top scroll-up rounded-full ${isVisible ? 'show' : 'hide'}`}
            onClick={scrollToTop}
        >
                       <img
                    src={require("../../images/icons8-upward-arrow.gif")}
                    className="socicon up-arrow"
                    alt="scroll-up"
                />
        </button>
    );
};

export default ScrollToTopButton;
