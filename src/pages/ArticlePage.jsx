import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer';
import { getArticles } from '../services/api';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
      const fetchData = async () => {
        const data = await getArticles();
        setArticles(data);
      };
      fetchData();
    }, []);

    const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
    <Navbar />
  <div className='flex justify-center'>
      <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search News..."
          className="w-full mx-64 px-4 py-2 border text-black border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
  </div>
      <div className="px-18 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
