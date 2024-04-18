import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/post";
import useWindowSize from "../hooks/useWindowSize";
import useAxiosFetch from "../hooks/useAxiosFetch";


const DataContext = createContext({})

export const DataProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [editPostTitle, setEditPostTitle] = useState("");
    const [editPostBody, setEditPostBody] = useState("");
    const { width } = useWindowSize();
    const { data, fetchError, isLoading } = useAxiosFetch("http://localhost:2500/posts")

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
        <DataContext.Provider value={{
            width, search, setSearch, searchResults, isLoading, 
            fetchError, handleSubmit, postTitle, setPostTitle, postBody, setPostBody, 
            posts, handleEdit, editPostBody, setEditPostBody, editPostTitle, setEditPostTitle, 
            posts, handleDelete 
        }}>

            {children}
        </DataContext.Provider>
    )
}


export default DataContext