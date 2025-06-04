import React, { useEffect, useRef, useState } from 'react';
import hands from '../assets/images/hands.png';
import background from '../assets/images/background.png';

const Hero = () => {
  const handsRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsAnimated(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Hands Image with fade mask */}
      <img
        src={hands}
        alt="Hands"
        ref={handsRef}
        className={`absolute max-w-7xl transition-all duration-700 ease-out pointer-events-none z-10
          ${isAnimated
            ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-100'
            : 'top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-125'}
        `}
        style={{
          objectFit: 'contain',
          width: '100%',
          maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
        }}
      />

      {/* Title in Center */}
      <div className="z-20 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold font-poppins leading-tight text-white drop-shadow-lg">
          Solution For <br />
          <span className="text-cyan-300">A Digital World</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
