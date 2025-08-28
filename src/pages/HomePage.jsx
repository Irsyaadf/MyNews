import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Clock, User, ArrowRight } from "lucide-react";
import { categories, featuredArticle, latestArticles } from "../services/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomePage = () => {


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[70vh] bg-cover bg-center flex items-end cursor-pointer mb-12"
        style={{ backgroundImage: `url(${featuredArticle.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30"></div>
        <div className="container mx-auto px-4 py-8 relative z-10 text-white">
          <div className="max-w-2xl">
            <span className="bg-blue-600 text-xs px-3 py-1.5 rounded-full font-medium">
              {featuredArticle.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-4 leading-tight">
              {featuredArticle.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-6">
              {featuredArticle.excerpt}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                <span>{featuredArticle.date}</span>
              </div>
              <span>•</span>
              <span>{featuredArticle.readTime}</span>
            </div>
            <Link
              className="inline-flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 group"
            >
              Baca Selengkapnya
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 flex-1 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Berita Terbaru
              </h2>
              <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                Lihat Semua
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestArticles.map((article) => (
                <div
                  key={article.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-lg font-bold text-blue-700 hover:underline mb-2">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2 mb-3">
                      <Clock size={18} />
                      {article.date}
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>

                    <motion.a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition"
          whileTap={{ scale: 0.95 }}
        >
          Baca Selengkapnya
        </motion.a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories Section */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Kategori Berita
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                  >
                    <span className="text-gray-700 font-medium">
                      {category.name}
                    </span>
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                Berlangganan Newsletter
              </h3>
              <p className="text-blue-100 text-sm mb-4">
                Dapatkan update berita terbaru langsung ke email Anda setiap
                hari
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="w-full px-4 py-2.5 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button className="w-full bg-white text-blue-700 font-medium py-2.5 rounded-lg hover:bg-gray-100 transition-colors">
                  Berlangganan Sekarang
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
