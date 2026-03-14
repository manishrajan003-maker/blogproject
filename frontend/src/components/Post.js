import { Link } from "react-router-dom";
import axios from "axios";

export default function Post({ post, onDelete }) {
  const preview =
    post.content.length > 200
      ? post.content.substring(0, 200) + "..."
      : post.content;

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await axios.delete(`http://localhost:8000/api/posts/${post._id}`);
        alert("✅ Post deleted successfully");
        if (onDelete) onDelete(post._id); // notify parent to refresh list
      } catch (err) {
        console.error("❌ Error deleting post:", err);
        alert("Failed to delete post");
      }
    }
  };

  return (
    <div className="card mb-3">
      {post.image && (
        <div className="text-center p-2">
          <img
            src={post.image}
            alt={post.title}
            style={{
              maxHeight: "100px",
              width: "auto",
              objectFit: "contain"
            }}
          />
        </div>
      )}
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{preview}</p>
        <small className="text-muted">By {post.author}</small>
        <div className="mt-2 d-flex gap-2">
          <Link to={`/posts/${post._id}`} className="btn btn-sm btn-primary">
            Read more
          </Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}