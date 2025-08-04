import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Shop Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Craze Tailors</h2>
          <p className="text-sm">
            Shop No. 126, 1st Floor,<br />
            Sri Bapuji Market Complex, Ongole<br />
            📞 <a href="tel:+919618342436" className="hover:underline text-white">+91 96183 42436</a><br />
            📧 <a href="mailto:crazetailorssrinivasulu@gmail.com" className="hover:underline text-white">crazetailorssrinivasulu@gmail.com</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">🏠 Home</a></li>
            <li><a href="/shirts" className="hover:underline">👕 Shirts</a></li>
            <li><a href="/pants" className="hover:underline">👖 Pants</a></li>
            <li><a href="/contact" className="hover:underline">📞 Contact</a></li>
          </ul>
        </div>

        {/* Map or WhatsApp CTA */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Get in Touch</h2>
          <p className="text-sm mb-3">
            Open all days: <strong>9:00 AM – 9:00 PM</strong>
          </p>
          <a
            href="https://wa.me/919618342436"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition"
          >
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Craze Tailors. Built with ❤️ for my Dad.
      </div>
    </footer>
  );
};

export default Footer;
