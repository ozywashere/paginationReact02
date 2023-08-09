import { useState, useEffect } from 'react';
import Paginate from './Paginate';

const url = 'https://dummyjson.com/posts';

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const posts = data.posts;
    setData(Paginate(posts));
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return { loading, data };
};

export default useFetch;
