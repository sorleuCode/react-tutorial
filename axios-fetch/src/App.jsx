import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import { useState, useEffect } from "react";
import { format } from 'date-fns';
import api from "./api/posts";




function App() {

  const [posts, setPosts] = useState([])



  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  
  useEffect(() => {
    const fecthPosts = async() => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (error) {
        if(error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers)
        }else {
          console.log(`Error: ${error.message}`)
        }
      }
    };

    fecthPosts();
  }, []);

  useEffect(() => {
    const filteredResult = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((post.title).toLowerCase()).includes(search.toLowerCase()))

      setSearchResult(filteredResult.reverse())
  }, [posts, search])




  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), `MMMM dd, yyyy pp`)

    const newPost = { id, title: postTitle, dateTime, body: postBody}

    try {
      const response =  await api.post("/posts", newPost)

      const allposts = [...posts, response]
      setPosts(allposts)
      setPostTitle('')
      setPostBody('')

      navigate('/')

    } catch (error) {
      console.log(`Error: ${error.message}`)
    }
  }

  const handleDelete = async (id) => {

    try {
      await api.delete(`/posts/${id}`)
      const postList = posts.filter(post => post.id != id)
      setPosts(postList)
      navigate('/')
      
    } catch (error) {
      
    }
  }

  return (
    <div className="App">
      <Header title="DLT Blogs" />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={searchResult} />} />

        <Route path="/post" element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}

        />} />

        <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />

      </Routes>
      <Footer />

    </div>
  )
}

export default App
