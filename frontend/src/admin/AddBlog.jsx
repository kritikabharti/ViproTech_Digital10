import { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function AddBlog() {

  const [blog, setBlog] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    readTime: "",
    image: null,
  });

  const handleChange = (e) => {

    if (e.target.name === "image") {

      setBlog({
        ...blog,
        image: e.target.files[0],
      });

    } else {

      setBlog({
        ...blog,
        [e.target.name]: e.target.value,
      });

    }
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(blog);

    // Backend API later

  };

  return (
    <div className="admin">

      <Sidebar />

      <div className="content">

        <h2>Add Blog</h2>

        <form onSubmit={handleSubmit}>

          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
          />

          <input
            name="readTime"
            placeholder="8 min read"
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Short Description"
            onChange={handleChange}
          />

          <textarea
            rows="10"
            name="content"
            placeholder="Blog Content"
            onChange={handleChange}
          />

          <input
            type="file"
            name="image"
            onChange={handleChange}
          />

          <button>
            Publish Blog
          </button>

        </form>

      </div>

    </div>
  );
}