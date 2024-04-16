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
import { format } from "date-fns";
import api from "./api/post";
import EditPost from "./EditPost";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";

function App() {
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editPostTitle, setEditPostTitle] = useState("");
  const [editPostBody, setEditPostBody] = useState("");
  const {width} = useWindowSize();
  const {data, fetchError, isLoading} = useAxiosFetch("http://localhost:4000/posts")

  //STEP 1
  // useEffect(() => {
  //   //we are using useEffect hooks so that the function will take effect as soon as the page loads
  //   const fetchPosts = async () => {
  //     try {
  //       // const response = await axios.get("/endpoint")
  //       const response = await api.get("/posts"); //axios returns results in json format automatically, so we don't need to convert the response to json format
  //       // {response = {
  //       // data : {}
  //       // }}
  //       setPosts(response.data); //setPosts array updated
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    setPosts(data)
  }, [data])

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, dateTime, body: postBody };
    //1. tryCatch block and refactor
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleEdit = async (id) => {
    const dateTime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = {
      id,
      title: editPostTitle,
      dateTime,
      body: editPostBody,
    };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditPostTitle("");
      setEditPostBody("");
      navigate("/");
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <Header title="DLT Blogs" width={width} />
      <Nav search={search} setsearch={setSearch} />
      <Routes>
        {/* <Route path="/" element={<Home posts={posts} />} /> */}

        {/* Step 3 */}
        <Route path="/" element={
        
        <Home posts={searchResults} 
          fetchError={fetchError}
          isLoading={isLoading}
        />} />

        {/* Step 1*/}
        <Route
          path="/post"
          element={
            <NewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              postBody={postBody}
              setPostBody={setPostBody}
            />
          }
        />

        <Route
          path="/edit/:id"
          element={
            <EditPost
              posts={posts}
              handleEdit={handleEdit}
              editPostTitle={editPostTitle}
              setEditPostTitle={setEditPostTitle}
              editPostBody={editPostBody}
              setEditPostBody={setEditPostBody}
            />
          }
        />

        <Route
          path="/post/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
