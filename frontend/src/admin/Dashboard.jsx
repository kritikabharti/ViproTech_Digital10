import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <div className="admin">

      <Sidebar />

      <div className="content">

        <h1>Dashboard</h1>

        <p>Welcome Admin</p>

      </div>

    </div>
  );
}