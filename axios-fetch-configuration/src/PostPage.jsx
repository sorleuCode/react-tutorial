import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import DataContext from "./contexts/DataContext";
import api from "./api/post";


const PostPage = () => {
  const {setPosts, posts} = useContext(DataContext)
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);

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
  return (
    <main className="PostPage">
      <article className="post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.dateTime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className="editButton">
                Edit Post
              </button>
            </Link>
            <button className="deleteButton" onClick={() => handleDelete(post.id)}>Delete post</button>
          </>
        )}
        {/* Step1 */}

        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointing.</p>
            <p>
              <Link to="/">Visit Our Homepage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
