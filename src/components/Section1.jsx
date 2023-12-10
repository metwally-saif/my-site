import '../styles/section1.css'

import React, { useState, useEffect } from 'react';

function Section1() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`sec1 flex items-center justify-start px-20 transition ease-in-out duration-500 ${
                isScrolled ? 'bg-white  text-black' : 'bg-black text-white'
            }`}
        >
            <h1>
                Perfection is not attainable, but if we chase perfection, we can catch{' '}
                <span className="text-orange-500">excellence.</span>
            </h1>
        </div>
    );
}

export default Section1;
