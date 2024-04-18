import { useContext, useState } from "react"
import DataContext from "./contexts/DataContext"
import { useNavigate } from "react-router-dom";
import api from "./api/post"
import { format } from "date-fns";

const NewPost = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const navigate = useNavigate();
    const { posts, setPosts} = useContext(DataContext)

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
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
  }
  
  export default NewPost