import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <h2>Admin</h2>

      <Link to="/admin">
        Dashboard
      </Link>

      <Link to="/admin/add-blog">
        Add Blog
      </Link>

      <Link to="/admin/blogs">
        All Blogs
      </Link>

    </div>
  );
}