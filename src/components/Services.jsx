import React from 'react';
import serviceBg from '../assets/images/ServicesBg.png';
import service1 from '../assets/images/ServicesImg1.png';
import service2 from '../assets/images/ServicesImg2.png';

const Services = () => {
  return (
    <section
      className="w-full py-24 px-6 md:px-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${serviceBg})` }}
    >
      <h2 className="text-4xl md:text-6xl font-extrabold text-white text-center mb-16">
        Our <span className="text-white">Services</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Widget 1 */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center relative transition-transform duration-300 hover:scale-[1.02]"
          style={{ backgroundImage: `url(${service1})` }}
        >
          <div className="p-8 md:p-12 text-white bg-black/30 backdrop-blur-[2px] min-h-[360px] flex flex-col justify-start">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Social Media Marketing
            </h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              We craft powerful digital strategies, engaging content, and data-driven campaigns to boost your brand’s online presence
            </p>
          </div>
        </div>

        {/* Widget 2 */}
        <div
          className="rounded-3xl overflow-hidden shadow-2xl bg-cover bg-center relative transition-transform duration-300 hover:scale-[1.02]"
          style={{ backgroundImage: `url(${service2})` }}
        >
          <div className="p-8 md:p-12 text-white bg-black/30 backdrop-blur-[2px] min-h-[360px] flex flex-col justify-start">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
              Production
            </h3>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              We craft powerful digital strategies, engaging content, and data-driven campaigns to boost your brand’s online presence
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
