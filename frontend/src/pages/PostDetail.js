import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="container my-5">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small className="text-muted">By {post.author}</small>
    </div>
  );
}