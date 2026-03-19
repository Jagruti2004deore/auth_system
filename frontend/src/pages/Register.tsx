import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
  role: string;
}

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await API.post("/api/auth/register", form);
      alert("Registered successfully");
      navigate("/");
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{inlineSize: "400px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="form-control mb-2"
            placeholder="Enter name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control mb-2"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control mb-2"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <select
            name="role"
            className="form-select mb-3"
            value={form.role}
            onChange={handleChange}
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>

          <button className="btn btn-success w-100">Register</button>
        </form>

        <p className="text-center mt-3">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;