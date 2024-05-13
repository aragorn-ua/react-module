import { useState } from "react";
// import axios from "axios";
import './App.css'
import ArticleList from "./components/ArticleList"
import { fetchArticlesWithTopic } from "./articles-api";
import {SearchForm} from "./components/SearchForm"

const App = () => {
	const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

	const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p>  MODULE  4  </p>
      <SearchForm onSearch={handleSearch} />
      {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {articles.length > 0 && <ArticleList items={articles} />}
      <p>END OF 4-th MODULE</p>


    </div>
  );
};




export default App;
