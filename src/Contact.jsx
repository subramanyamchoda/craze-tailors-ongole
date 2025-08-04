import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center mt-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-5xl font-extrabold text-gray-800 mb-4 text-center"
      >
        Contact Craze Tailors
      </motion.h2>

      <p className="text-gray-600 text-base sm:text-lg mb-10 text-center max-w-2xl">
        Reach out to us for bookings, tailoring services, or any assistance. We’re here to help you look your best.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-7xl">
        {/* LEFT SIDE – Map + Services */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <img
            src="/map.jpg" // Replace with correct path
            alt="Tailor Shop Location"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-xl"
          />

          <div className="bg-gray-50 border rounded-xl p-6 shadow space-y-3">
            <h4 className="text-xl font-semibold text-gray-800">🧵 Tailoring Services Offered:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>Custom Shirt & Pant Stitching</li>
              <li>Traditional & Modern Kurtas</li>
              <li>Perfect Measurements & Alterations</li>
              <li>Express Delivery for Urgent Orders</li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg text-sm text-yellow-800">
            📢 <strong>Walk-ins welcome!</strong> For faster service, call or WhatsApp to book in advance.
          </div>
        </motion.div>

        {/* RIGHT SIDE – Contact Details + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-700"
        >
          <div className="space-y-3 text-base leading-relaxed">
            <p><strong>📍 Address:</strong> Shop No. 126, 1st Floor, Sri Bapuji Market Complex, Ongole</p>
            <p><strong>📞 Phone:</strong> <a href="tel:+919618342436" className="text-black hover:underline">+91 96183 42436</a></p>
            <p><strong>💬 WhatsApp:</strong> <a href="https://wa.me/919618342436" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Chat with Us</a></p>
            <p><strong>📧 Email:</strong> <a href="mailto:crazetailorssrinivasulu@gmail.com" className="text-black hover:underline">crazetailorssrinivasulu@gmail.com</a></p>
            <p><strong>⏰ Timings:</strong> Open All Days – 9 AM to 9 PM</p>
          </div>

          <div className="w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <iframe
              title="Craze Tailors Map"
              src="https://www.google.com/maps?q=15.5083867,80.0488231&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
