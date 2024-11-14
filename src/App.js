// src/App.js
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Grid from './components/Grid';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  // Fetch data from API based on page number
  const fetchData = useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(`https://test.create.diagnal.com/data/page${page}.json`);
      setData((prevData) => [...prevData, ...response.data.content]);
      setIsFetching(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsFetching(false);
    }
  }, [page]);

  // Lazy load more data as user scrolls down
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Grid data={data} />
      {isFetching && <p>Loading more items...</p>}
    </div>
  );
}

export default App;

