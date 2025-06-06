import React from 'react';
import bg from '../assets/images/secondbackground.png';
import head from '../assets/images/head.png';
import { Element } from 'react-scroll';

const About = () => {
  return (
    <Element name="about">
      <section
        className="relative w-full min-h-screen flex items-center justify-between px-6 md:px-20 py-16 bg-black overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Left Content */}
        <div className="z-10 w-full md:w-1/2 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Welcome to <br />
            <span className="text-white">Next Vibe</span>
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-xl">
            At Next Vibe, we are more than just a brand—we are a movement that fuses technology, communication,
            and creativity to bring your ideas to life. Whether you're looking for cutting-edge social media marketing,
            high-quality production services, or unique creative products, we have the expertise to make your brand stand out.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition">
              Social Media Marketing
            </button>
            <button className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition">
              Production
            </button>
            <button className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3 rounded-full text-white font-semibold shadow-md hover:scale-105 transition">
              Creative Products
            </button>
          </div>
        </div>

        {/* Static Head Image */}
        <div className="hidden md:block absolute right-0 bottom-0 z-0 pointer-events-none">
          <img
            src={head}
            alt="Next Vibe Creative Head"
            className="w-[1200px] h-screen object-contain object-bottom"
          />
        </div>

        {/* Animated Top Area Only */}
        <div className="hidden md:block absolute right-0 bottom-0 z-10 pointer-events-none">
          <img
            src={head}
            alt="Animated Head Overlay"
            className="w-[1200px] h-screen object-contain object-bottom animate-float"
            style={{
              clipPath: 'polygon(55% 0%, 100% 0%, 100% 70%, 75% 55%, 65% 50%, 55% 50%, 50% 40%, 45% 30%, 50% 10%)',
              opacity: 0.8,
              mixBlendMode: 'lighten',
            }}
          />
        </div>
      </section>
    </Element>
  );
};

export default About;