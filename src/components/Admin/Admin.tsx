import {  useState } from "react";
import { Row } from "react-bootstrap";
import Navigation from "../Layouts/NavigationBar";


const Admin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === import.meta.env.VITE_ADMIN_USERNAME && password === import.meta.env.VITE_ADMIN_PASSWORD) {
      window.location.href = "/admin/dashboard";
    } else {
      setError("Incorrect username or password");
    }
  };
  return (
    <div>
      <Navigation />

      <Row className="admin-wrapper">
        <div className="admin-div">
          <h3>Login</h3>

          <input
            type="text"
            placeholder="Username"
            className="form-control mb-3"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div style={{ color: "red", marginBottom: "10px" }}>
              {error}
            </div>
          )}

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </Row>
    </div>
  );
};

export default Admin;