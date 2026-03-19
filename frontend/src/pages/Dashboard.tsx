import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import type { User } from "../types/User";

function Dashboard() {
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }

    if (role === "ADMIN") {
      API.get("/api/admin/users")
        .then((res) => setUsers(res.data))
        .catch((err) => console.error(err));
    }
  }, [token, role, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="container-fluid p-0">

      {/* 🔥 HEADER */}
      <div
        className="p-4 text-white"
        style={{
          background: "linear-gradient(90deg, #667eea, #764ba2)",
        }}
      >
        <div className="d-flex justify-content-between align-items-center">
          <h2>Welcome to Dashboard</h2>
          <button className="btn btn-light" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="container mt-4">

        {/* 👤 USER DASHBOARD */}
        {role === "USER" && (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "70vh" }}
  >
    <div
      className="card shadow-lg p-5 text-center border-0"
      style={{ inlineSize: "400px", borderRadius: "15px" }}
    >
      <h3 className="mb-3">👋 Welcome User</h3>
      <p className="text-muted">
        You are logged in successfully.
      </p>

      <div className="mt-4">
        <span className="badge bg-success p-2">
          Logged In ✅
        </span>
      </div>
    </div>
  </div>
)}

        {/* 🛠️ ADMIN DASHBOARD */}
        {role === "ADMIN" && (
          <>
            {/* 🔥 STATS CARDS */}
            <div className="row mb-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-3 bg-primary text-white">
                  <h6>Total Users</h6>
                  <h2>{users.length}</h2>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-3 bg-warning">
                  <h6>Admins</h6>
                  <h2>
                    {users.filter((u) => u.role === "ADMIN").length}
                  </h2>
                </div>
              </div>

              <div className="col-md-4">
                <div className="card shadow border-0 p-3 bg-success text-white">
                  <h6>Users</h6>
                  <h2>
                    {users.filter((u) => u.role === "USER").length}
                  </h2>
                </div>
              </div>
            </div>

            {/* 📊 USER TABLE */}
            <div className="card shadow-lg border-0">
              <div className="card-header bg-dark text-white">
                <h5 className="mb-0">👥 All Users</h5>
              </div>

              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Role</th>
                    </tr>
                  </thead>

                  <tbody>
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <span
                              className={`badge ${
                                user.role === "ADMIN"
                                  ? "bg-danger"
                                  : "bg-primary"
                              }`}
                            >
                              {user.role}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center p-4">
                          No users found 😔
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;