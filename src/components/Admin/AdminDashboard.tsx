import { HiHome } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { FaUsersCog } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

const AdminDashboard = () => {
  const logout = () => {
    window.location.href = "/";
  };

  return (
<div className="admin-dashboard">
  {/* LEFT SIDEBAR */}
  <div className="sidebar" style={{ height: "100vh", overflowY: "auto" }}>
    <div className="sidebar-item">
      <HiHome size={30} />
      <h6>Dashboard</h6>
    </div>

    <div className="sidebar-item logout" onClick={logout}>
      <BiLogOut size={30} />
      <h6>Logout</h6>
    </div>
  </div>
      {/* RIGHT MAIN CONTENT */}
      <div style={{ width: "80vw" }}>
        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#08798dff",
            height: "15vh",
            textAlign: "center",
            paddingTop: "3vh",
            color: "white",
          }}
        >
          <h3>ADMIN DASHBOARD</h3>
        </div>

        {/* FOUR MAIN BOXES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            padding: "40px 80px",
          }}
        >
          {/* Manage Services */}
   <div className="card" onClick={() => {window.location.href = "/admin/manage-service"}}>
  <FaUsersCog  color="#0097b2" size={35}/>
  <h4 style={{cursor: 'pointer'}}>Manage Services</h4>
</div>

          {/* Manage Team */}
          <div className="card" onClick={() => {window.location.href = "/admin/manage-team"}}>
            <FaUserFriends size={35} />
            <h4 style={{cursor: 'pointer'}}>Manage Team</h4>
          </div>

          {/* Insurance Providers */}
          <div
            className="card" onClick={() => {window.location.href = "/admin/manage-insurance"}}
          >
            <MdSecurity size={35} color="green" />
            <h4 style={{cursor: 'pointer'}}>Insurance Providers</h4>
          </div>

          {/* Edit Home Page */}
          <div
          className="card"
          >
            <AiFillHome size={35} />
            <h4 style={{cursor: 'pointer'}}>Edit Home Page</h4>
          </div>
        </div>

        {/* STATISTICS BOXES */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "5%",
          }}
        >
          <div
            style={{
              backgroundColor: "#67b3d2",
              padding: "20px 40px",
              color: "white",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <h5>Total Services</h5>
            <h2>23</h2>
          </div>

          <div
            style={{
              backgroundColor: "#67b3d2",
              padding: "20px 40px",
              color: "white",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <h5>Team Members</h5>
            <h2>12</h2>
          </div>

          <div
            style={{
              backgroundColor: "#67b3d2",
              padding: "20px 40px",
              color: "white",
              textAlign: "center",
              borderRadius: "8px",
            }}
          >
            <h5>Insurance Providers</h5>
            <h2>10</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;