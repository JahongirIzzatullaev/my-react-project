import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Posts from "./components/Posts";
import Pagination from "./components/Pagination";


function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(300);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/photos');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const indexLastPosts = currentPage * postPerPage;
  const indexFirstPosts = indexLastPosts - postPerPage;
  const currentPosts = posts.slice(indexFirstPosts, indexLastPosts)


  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const paginateLength = Math.ceil(posts.length / postPerPage);

  return (
      <div className="container mt-5">
        <h1 className="text-primary mb-3">My blog</h1>

        <Pagination totalPosts={paginateLength} paginate={paginate}/>
        <Posts posts={currentPosts} loading={loading}/>
      </div>
  );
}

export default App;