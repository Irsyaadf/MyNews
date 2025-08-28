import { Clock } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const ArticleCard = ({ article, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl mx-auto shadow-md hover:shadow-xl transition p-4 flex flex-col"
    >
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <motion.img
          src={article.image}
          alt={article.title || "No Title"}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      <div className="p-3">
        <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-bold text-blue-700 hover:underline mb-2 line-clamp-2"
      >
        {article.title || "Judul tidak tersedia"}
      </a>

      <div className="flex flex-wrap items-center text-sm text-gray-500 gap-2 mb-3">
        <Clock size={18} />
        {article.pusblised_at || "Tanggal tidak tersedia"}
      </div>

      <p className="text-gray-600 text-sm line-clamp-3">
        {article.headline || "Tidak ada deskripsi"}
      </p>

      <div className="mt-4">
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
    </motion.div>
  );
};

export default ArticleCard;
