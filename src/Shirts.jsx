import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const pantSets = [
     {
    id: 'Button-down',
    label: 'button-down Shirt',
    path: '/Button-down',
    frameCount: 2,
  },
   {
    id: 'collarless',
    label: 'collarless Shirt',
    path: '/collarless',
    frameCount: 4,
  },
   {
    id: 'CubanCollar',
    label: 'CubanCollar Shirt',
    path: '/CubanCollar',
    frameCount: 2,
  },
   {
    id: 'fullhand',
    label: 'Full Hand Shirt',
    path: '/fullhand',
    frameCount: 5,
  },
   {
    id: 'halfhand',
    label: 'Half Hand Shirt',
    path: '/halfhand',
    frameCount: 4,
  },
   {
    id: 'ShortKurta',
    label: 'Short kurtha',
    path: '/ShortKurta',
    frameCount: 2,
  },{
    id: 'NehruJacket',
    label: 'Nehru  jacket',
    path: '/NehruJacket',
    frameCount: 2,
  },
  {
    id: 'fullkurtha',
    label: 'Full kurtha',
    path: '/fullkurtha',
    frameCount: 2,
  },
  {
    id: 'doublepocket',
    label: 'Duoble Pocket Shirt',
    path: '/doublepocket',
    frameCount: 3,
  },  {
    id: 'colars',
    label: 'Different Colars Shirt',
    path: '/colars',
    frameCount: 1,
  },
];

const PantViewerCard = ({ set }) => {
  const [frame, setFrame] = useState(0);
  const startX = useRef(null);

  const images = Array.from({ length: set.frameCount }, (_, i) => ({
    id: i + 1,
    url: `${set.path}/${set.id}_${i + 1}.png`,
  }));

  const handleDragStart = (e) => {
    startX.current = e.clientX || e.touches?.[0]?.clientX;
  };

  const handleDragMove = (e) => {
    if (startX.current === null) return;
    const currentX = e.clientX || e.touches?.[0]?.clientX;
    const deltaX = currentX - startX.current;
    const threshold = 15;
    if (Math.abs(deltaX) > threshold) {
      const direction = deltaX > 0 ? -1 : 1;
      setFrame((prev) => (prev + direction + set.frameCount) % set.frameCount);
      startX.current = currentX;
    }
  };

  const handleDragEnd = () => {
    startX.current = null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl bg-white rounded-3xl shadow-xl p-4 sm:p-10 flex flex-col items-center my-8"
    >
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 text-center">
        360° View – {set.label}
      </h2>

      {/* Viewer */}
      <div className="my-4 sm:my-6">
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="w-full h-[500px] sm:h-[600px] md:h-[700px] max-w-[95%] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[800px] bg-gray-100 border border-gray-300 rounded-xl overflow-hidden select-none shadow-inner"
          onMouseDown={handleDragStart}
          onMouseMove={handleDragMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
        >
          {images.map((image, index) =>
            index === frame ? (
              <img
                key={image.id}
                src={image.url}
                alt={`${set.label} ${image.id}`}
                className="w-full h-full object-cover transition-transform duration-100 ease-out"
                draggable={false}
              />
            ) : null
          )}
        </motion.div>
      </div>

      {/* Hint */}
      <p className="mt-4 text-sm text-gray-500 italic text-center">
        Drag left or right to rotate
      </p>
    </motion.div>
  );
};

const Shirts = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 flex flex-col items-center">
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="w-full text-center mb-8"
>
  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 mt-12">
    Premium Custom Shirts
  </h2>
  <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
    Explore our tailored collection of men’s shirts, crafted with precision, elegance, and perfect fit in mind.
  </p>
</motion.div>
      {pantSets.map((set) => (
        <PantViewerCard key={set.id} set={set} />
      ))}
    </div>
  );
};

export default Shirts;
