import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer';

const ArticlePage = () => {
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fecthData = async () => {
      try {
        const articleResponse = await axios.get(
          "https://jakpost.vercel.app/api/category/indonesia/society"
        );
        setArticles(articleResponse.data.posts);
      } catch (error) {
        console.log(error);
      }
    };
    fecthData();
  }, []);

    const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
    <Navbar onChange={setSearchTerm} value={searchTerm}/>
      <div className="px-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default ArticlePage
