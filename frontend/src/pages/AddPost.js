import { useState, useEffect } from "react";
import axios from "axios";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories from backend
  useEffect(() => {
    axios.get("http://localhost:8000/api/categories")
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/posts", {
      title,
      content,
      author,
      category   // this will be the ObjectId from dropdown
    })
    .then(() => {
      alert("✅ Post added successfully");
      setTitle("");
      setContent("");
      setAuthor("");
      setCategory("");
    })
    .catch(err => console.error(" Error adding post:", err));
  };

  return (
    <div className="container my-5">
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="form-control mb-2"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <input
          className="form-control mb-2"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        {/* Dropdown for categories */}
        <select
          className="form-control mb-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select Category</option>
          {categories.map(cat => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}