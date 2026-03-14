import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../components/Post";
import { Link } from "react-router-dom";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/posts")
      .then(res => setPosts(res.data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  useEffect(() => {
    axios.get("http://localhost:8000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">All Posts</h2>

      <div className="mb-4">
        <h4>Browse by Category:</h4>
        <div className="d-flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat._id}
              className="btn btn-outline-primary"
              to={`/posts/category/${cat._id}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {posts.length > 0 ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}