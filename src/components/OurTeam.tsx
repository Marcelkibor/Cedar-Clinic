import { Col, Row, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Navigation from "./Layouts/NavigationBar";
import ServicesHeader from "./Services/ServicesHeader";
import Footer from "./Layouts/Footer";
import ScrollMotion from "./utils/ScrollMotion";
import { useEffect, useState } from "react";
import { ImWoman } from "react-icons/im";
import { GetMembers } from "./Admin/Operations/M.Team";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

const OurTeam = () => {
  const [clinicMembers, setClinicMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // ✅ NEW

  useEffect(() => {
    const top = document.getElementById("layout");
    if (top) top.scrollIntoView();
  }, []);

  useEffect(() => {
    const handleFetchMembers = async () => {
      setLoading(true);
      try {
        let res = await GetMembers();
        if (res) {
          setClinicMembers(res);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // ✅ stop loader
      }
    };

    handleFetchMembers();
  }, []);

  const formatName = (name: string) => {
    const nameParts = name.split(".");
    const formattedName =
      nameParts &&
      nameParts.length > 1 &&
      nameParts[nameParts.length - 1].trim().toLowerCase();

    return formattedName || name.toLowerCase();
  };

  return (
    <div id="layout">
      <Navigation />
      <ScrollMotion />
      <ServicesHeader pathname={window.location.pathname} />

      <Row style={{ textAlign: "center", marginTop: "100px" }}>
        <p className="header1">Meet Our Team</p>

        {/* ✅ LOADING STATE */}
        {loading ? (
          <div
            style={{
              width: "100%",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Spinner animation="border" style={{ width: "3rem", height: "3rem" }} />
            <p style={{ color: "#0d8069", fontWeight: "bold" }}>
              Loading team members...
            </p>
          </div>
        ) : clinicMembers.length === 0 ? (
          /* ✅ EMPTY STATE */
          <p style={{ marginTop: "40px" }}>No team members found</p>
        ) : (
          /* ✅ NORMAL RENDER */
          clinicMembers.map((item) => (
            <Col lg={4} md={6} sm={6} key={item.id}>
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  marginBottom: "20px",
                }}
              >
                {/* IMAGE */}
                <div style={{ width: "100%", height: "100%" }}>
                  {item.image ? (
                    <img
                      style={{
                        width: "100%",
                        maxHeight: "400px",
                        objectFit: "cover",
                      }}
                      src={item.image}
                      alt={item.name}
                    />
                  ) : (
                    <ImWoman
                      style={{
                        width: "150px",
                        height: "200px",
                        color: "gray",
                      }}
                    />
                  )}
                </div>

                {/* TEXT */}
                <div
                  style={{
                    padding: "15px",
                    backgroundColor: "white",
                  }}
                >
                  <p>
                    <NavLink
                      to={`${encodeURIComponent(formatName(item.name))}`}
                      style={{
                        textDecoration: "underline",
                        color: "#0d8069",
                        fontWeight: "bold",
                      }}
                    >
                      {item.name}
                    </NavLink>
                  </p>

                  <p style={{ color: "#0d8069" }}>{item.title}</p>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>

      <Footer />
    </div>
  );
};

export default OurTeam;