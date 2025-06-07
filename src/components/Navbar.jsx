import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { FiSend } from 'react-icons/fi';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/shop') setActive('shop');
    else if (path === '/contact') setActive('contact');
    else setActive('home');
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const safeScrollTo = (target, name) => {
    setActive(name);
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 500,
          smooth: true,
          offset: -70,
        });
      }, 100);
    } else {
      scroller.scrollTo(target, {
        duration: 500,
        smooth: true,
        offset: -70,
      });
    }
  };

  const navItemClass = (name) =>
    `relative cursor-pointer transition font-medium ${
      active === name
        ? 'after:absolute after:content-[""] after:h-[2px] after:w-5 after:bg-white/80 after:rounded-full after:left-1/2 after:-translate-x-1/2 after:-bottom-1'
        : ''
    }`;

  return (
    <>
      {/* Full Navbar at Top */}
      {!scrolled && (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[92%] max-w-7xl flex items-center justify-between px-6 md:px-12 py-3 rounded-full shadow-md backdrop-blur-md bg-[#0a0f2c]/80 text-white border border-white/10 transition-all duration-300">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold tracking-tight text-purple-400">
            Next Vibe
          </div>

          {/* Nav Links */}
          <div className="flex gap-6 md:gap-8 items-center text-sm md:text-base">
            <div
              onClick={() => safeScrollTo('hero', 'home')}
              className={navItemClass('home')}
            >
              Home
            </div>

            <div
              onClick={() => safeScrollTo('about', 'about')}
              className={navItemClass('about')}
            >
              About Us
            </div>

            <div
              onClick={() => safeScrollTo('services', 'services')}
              className={navItemClass('services')}
            >
              Services
            </div>

            <button
              onClick={() => {
                setActive('shop');
                navigate('/shop');
              }}
              className={navItemClass('shop')}
            >
              Shop
            </button>

            <button
              onClick={() => {
                setActive('contact');
                navigate('/contact');
              }}
              className="flex items-center gap-1 font-semibold text-red-400"
            >
              Contact <FiSend className="text-lg" />
            </button>
          </div>
        </nav>
      )}

      {/* Split Navbar on Scroll */}
      {scrolled && (
        <>
          <div className="fixed top-4 left-6 z-50 bg-[#1e2a55] text-purple-300 px-6 py-2 rounded-full text-xl font-bold shadow-md transition-all duration-300">
            Next Vibe
          </div>

          <button
            onClick={() => {
              setActive('contact');
              navigate('/contact');
            }}
            className="fixed top-4 right-6 z-50 bg-red-500 text-white p-3 rounded-full shadow-md transition-all duration-300"
          >
            <FiSend className="text-lg" />
          </button>
        </>
      )}
    </>
  );
};

export default Navbar;
