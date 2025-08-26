import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 px-16">
      <div className="max-w-7xl py-10 flex flex-wrap gap-2 justify-between">
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyNews</h2>
          <p className="text-sm text-gray-400">
            Portal berita terpercaya yang menyajikan informasi terbaru dan aktual
            setiap hari.
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Ikuti Kami
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:info@mynews.com"
              className="p-2 bg-gray-800 rounded-full hover:bg-red-500 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} MyNews. Semua Hak Dilindungi.
      </div>
    </footer>
  );
};

export default Footer;
