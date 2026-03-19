import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      navigate("/dashboard");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ inlineSize: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button className="btn btn-primary w-100">Login</button>
        </form>

        <p className="text-center mt-3">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;