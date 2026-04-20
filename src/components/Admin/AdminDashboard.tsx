import { useEffect, useState } from "react";
import { HiHome } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { FaUsersCog, FaUserFriends } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

import { GetServices } from "./Operations/M.Services";
import { GetInsurance } from "./Operations/M.Insurance";
import { GetMembers } from "./Operations/M.Team";

const AdminDashboard = () => {
  const [serviceCount, setServiceCount] = useState(0);
  const [teamCount, setTeamCount] = useState(0);
  const [insuranceCount, setInsuranceCount] = useState(0);

  const getServiceCount = async () => {
    try {
      const res = await GetServices();
      setServiceCount(res.length);
    } catch (err) {
      console.log(err);
    }
  };

  const getInsuranceCount = async () => {
    try {
      const res = await GetInsurance();
      setInsuranceCount(res.length);
    } catch (err) {
      console.log(err);
    }
  };

  const getTeamCount = async () => {
    try {
      const res = await GetMembers();
      setTeamCount(res.length);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getServiceCount();
    getInsuranceCount();
    getTeamCount();
  }, []);

  const logout = () => {
    window.location.href = "/";
  };

  const cardStyle = (color:any) => ({
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "20px",
    borderRadius: "14px",
    cursor: "pointer",
    background: "white",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
    borderLeft: `6px solid ${color}`,
  });

  const iconWrap = (color:any) => ({
    background: `${color}15`,
    padding: "12px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const titleStyle = {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
  };

  return (
    <div className="admin-dashboard">
      {/* SIDEBAR */}
      <div className="sidebar" style={{ height: "100vh", overflowY: "auto" }}>
        <div className="sidebar-item">
          <HiHome size={20} />
          <h6>Dashboard</h6>
        </div>

        <div className="sidebar-item logout" onClick={logout}>
          <BiLogOut size={30} />
          <h6>Logout</h6>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ width: "80vw" }}>
        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#08798dff",
            height: "15vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <h3>ADMIN DASHBOARD</h3>
        </div>

        {/* CARDS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            padding: "40px 80px",
          }}
        >
          {/* Services */}
          <div
            style={cardStyle("#0097b2")}
            onClick={() => (window.location.href = "/admin/manage-service")}
          >
            <div style={iconWrap("#0097b2")}>
              <FaUsersCog size={28} color="#0097b2" />
            </div>
            <h4 style={titleStyle}>Manage Services</h4>
          </div>

          {/* Team */}
          <div
            style={cardStyle("#6c5ce7")}
            onClick={() => (window.location.href = "/admin/manage-team")}
          >
            <div style={iconWrap("#6c5ce7")}>
              <FaUserFriends size={28} color="#6c5ce7" />
            </div>
            <h4 style={titleStyle}>Manage Team</h4>
          </div>

          {/* Insurance */}
          <div
            style={cardStyle("#00b894")}
            onClick={() => (window.location.href = "/admin/manage-insurance")}
          >
            <div style={iconWrap("#00b894")}>
              <MdSecurity size={28} color="#00b894" />
            </div>
            <h4 style={titleStyle}>Insurance Providers</h4>
          </div>

          {/* Home */}
          <div style={cardStyle("#fdcb6e")}>
            <div style={iconWrap("#fdcb6e")}>
              <AiFillHome size={28} color="#fdcb6e" />
            </div>
            <h4 style={titleStyle}>Edit Home Page</h4>
          </div>
        </div>

        {/* STATS (NOW DYNAMIC) */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginTop: "5%",
          }}
        >
          {[
            { label: "Total Services", value: serviceCount, color: "#0097b2" },
            { label: "Team Members", value: teamCount, color: "#6c5ce7" },
            { label: "Insurance Providers", value: insuranceCount, color: "#00b894" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                backgroundColor: item.color,
                padding: "20px 40px",
                color: "white",
                textAlign: "center",
                borderRadius: "12px",
                minWidth: "180px",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              }}
            >
              <h5>{item.label}</h5>
              <h2>{item.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;