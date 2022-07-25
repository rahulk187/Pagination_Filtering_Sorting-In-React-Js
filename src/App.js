import React, { useState, useEffect } from 'react';
import Posts from './components/Posts'
import Pagination from './components/Pagination'
import axios from 'axios'
import './App.css';
import Sorting from './components/Sorting';
import NavBar from './components/NavBar';



function App() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [sortType, setSortType] = useState("ascending");
  const [searchItems, setSearchItems] = useState('')

  // fetching & searching data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setPosts(res.data);
      setLoading(false);

      if (searchItems !== '') {

        // var data1 = posts.filter(post => post.name.toLowerCase().includes(searchItems))
        // var data2 = posts.filter(post => post.email.toLowerCase().includes(searchItems))
        // var data3 = posts.filter(post => post.id.toString().toLowerCase().includes(searchItems))
        // var data4 = posts.filter(post => post.postId.toString().toLowerCase().includes(searchItems))


        setPosts(posts.filter(post => post.name.toLowerCase().includes(searchItems)))
      }
    }
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchItems]);

  // sorting
  useEffect(() => {
    if (sortType === 'ascending') {
      setPosts(posts.sort(byAcc))
    }

    if (sortType === 'descending') {
      setPosts(posts.sort(byDesc))
    }
    
  }, [sortType, posts, searchItems]);

  function byAcc(a, b) {
    return parseInt(b.postId) - parseInt(a.postId);
  }
  function byDesc(a, b) {
    return parseInt(a.postId) - parseInt(b.postId);
  }

  // Get current posts 
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <>
      <NavBar setSearchItems={setSearchItems} />
      <div className="container-fluid mt-5">
        {/* <h1 className="text-primary mb-3 text-center">My App</h1> */}
        <Sorting setSortType={setSortType} />
        <Posts posts={currentPosts} loading={loading} />
        <h1 className="text-center text-danger">
          {posts.length ? '' : 'Not Found'}
        </h1>
        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </>
  );
}

export default App;
