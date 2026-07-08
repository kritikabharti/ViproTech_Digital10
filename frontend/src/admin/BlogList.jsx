import Sidebar from "../components/Sidebar";

export default function BlogList() {

  return (

    <div className="admin">

      <Sidebar />

      <div className="content">

        <h2>All Blogs</h2>

        <table>

          <thead>

            <tr>

              <th>Title</th>

              <th>Category</th>

              <th>Date</th>

              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {/* Backend Data */}

          </tbody>

        </table>

      </div>

    </div>

  );

}