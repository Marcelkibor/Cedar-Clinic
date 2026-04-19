import { Row } from "react-bootstrap";
import Navigation from "../Layouts/NavigationBar";


const Admin = () => {
    const handleLogin = () => {
        window.location.href = "/admin/dashboard";
    }
  return (
    <div>
      <Navigation />

      <Row className="admin-wrapper">
        <div className="admin-div">
          <h3>Login</h3>
          <input type="text" placeholder="Username" className="form-control mb-3" />
          <input type="password" placeholder="Password" className="form-control mb-3" />
          <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
        </div>
      </Row>
    </div>
  );
};

export default Admin;