import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Post from "../components/Post";

export default function CategoryPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/category/${id}`)
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching category posts:", err));
  }, [id]);

  return (
    <div className="container my-5">
      <h2>Category Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts in this category</p>
      )}
    </div>
  );
}