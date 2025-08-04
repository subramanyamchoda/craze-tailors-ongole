import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shirt } from 'lucide-react';
import { PiPants } from 'react-icons/pi';

const HomePage = () => {
  const services = [
    { name: 'Full Hands Shirts', image: '/fullhand/fullhand_1.png' },
    { name: 'Traditional Kurtas', image: '/ShortKurta/ShortKurta_1.png' },
    { name: 'Collarless Shirts', image: '/collarless/collarless_4.png' },
    { name: 'Bootcut Pants', image: '/bootcut/bootcut_10.png' },
    { name: 'Ankle-Length Pants', image: '/Ankle-Length/Ankle-Length_1.png' },
    { name: 'RelaxedFit Pants', image: '/RelaxedFit/RelaxedFit_1.png' },
  ];

  return (
    <div className="min-h-screen bg-white px-6 pt-24 pb-10 flex flex-col items-center justify-start">
      
    

      {/* 🔽 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl w-full px-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-black">Craze Men’s Tailoring</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          We specialize in premium custom tailoring for men’s wear — including
          <span className="font-semibold text-black"> Shirts</span>,
          <span className="font-semibold text-black"> Pants</span>,
          <span className="font-semibold text-black"> Kurtas</span>, and more.
          Experience perfect fit, modern styles, and timeless craftsmanship.
        </p>

        {/* 🔽 Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/shirts"
            className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-xl hover:bg-gray-800 transition duration-200 text-base sm:text-lg font-medium"
          >
            <Shirt size={18} />
            Shirts (360° View)
          </Link>

          <Link
            to="/pants"
            className="flex items-center gap-2 px-6 py-3 text-white bg-black rounded-xl hover:bg-gray-800 transition duration-200 text-base sm:text-lg font-medium"
          >
            <PiPants size={20} />
            Pants (360° View)
          </Link>
        </div>
      </motion.div>

      {/* 🔽 Services Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
        className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {services.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="rounded-2xl shadow-lg overflow-hidden bg-gray-50 border hover:shadow-2xl transition-shadow"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[320px] object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HomePage;
