import axios from "axios";

const API_URL = "https://jakpost.vercel.app/api/category/indonesia/society";

export const getArticles = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.posts;
  } catch (error) {
    console.log("Error fetching articles:", error);
    return [];
  }
};