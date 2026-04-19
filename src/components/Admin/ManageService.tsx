import { useEffect, useState } from "react";
import { BiLogOut, BiEdit, BiTrash } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { GetServices, PostService } from "./Operations/M.Services";

interface Service {
  id: number;
  name: string;
  description: string;
}
const ManageService = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const itemsPerPage = 5;

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async (): Promise<void> => {
    try {
      const result: Service[] = await GetServices();
      setServices(result);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };
  const logout = (): void => {
    window.location.href = "/";
  };
  const handleAddService = async (): Promise<void> => {
    if (!name.trim() || !description.trim()) {
      alert("Please enter service name and description");
      return;
    }
    try {
      const res = await PostService({
        name,
        description,
      });
      setName("");
      setDescription("");
    
    } catch (error) {
      console.error("error adding service:", error);
      alert("Failed to add service");
    }
  };

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(
    startIndex,
    startIndex + itemsPerPage

  );

  const handleEdit = (service: Service): void => {
    console.log("Edit:", service);
  };

  const handleDelete = (service: Service): void => {
    console.log("Delete:", service);
  };
  return (
    <div className="admin-dashboard">
      {/* SIDEBAR */}
      <div className="sidebar">
        <div
          className="sidebar-item"
          onClick={() => {
            window.location.href = "/admin/dashboard";
          }}
        >
          <HiHome size={30} />
          <h6>Dashboard</h6>
        </div>

        <div className="sidebar-item logout" onClick={logout}>
          <BiLogOut size={30} />
          <h6>Logout</h6>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content" style={{ width: "80vw" }}>
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

        <div
          style={{
            textAlign: "center",
            marginTop: "15px",
            fontWeight: "bold",
          }}
 >
          <h5>Manage Services</h5>
        </div>

        {/* ADD SERVICE FORM */}
        <div
          style={{
            width: "95%",
            margin: "20px auto",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h5 style={{ marginBottom: "15px" }}>Add New Service</h5>

          <input
            type="text"
            placeholder="Enter service name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Enter service description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            style={textareaStyle}
          />

          <button onClick={handleAddService} style={btnStyle}>
            Add Service
          </button>
        </div>

        {/* TABLE */}
        <div
          style={{
            width: "95%",
            margin: "20px auto",
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "20px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Service Name</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentServices.map((service, index) => (
                <tr key={service.id}>
                  <td style={tdStyle}>{startIndex + index + 1}</td>
                  <td style={tdStyle}>{service.name}</td>

                  <td style={tdStyle}>
                    {service.description.length > 80
                      ? `${service.description.slice(0, 80)}...`
                      : service.description}
                  </td>

                  <td style={tdStyle}>
                    <BiEdit
                      size={22}
                      style={{
                        cursor: "pointer",
                        marginRight: "12px",
                        color: "#0d6efd",
                      }}
                      onClick={() => handleEdit(service)}
                    />

                    <BiTrash
                      size={22}
                      style={{
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={() => handleDelete(service)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div
              style={{
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                style={btnStyle}
              >
                Prev
              </button>

              <span
                style={{
                  margin: "0 15px",
                  fontWeight: "bold",
                }}
              >
                {currentPage} / {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
                style={btnStyle}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const thStyle: React.CSSProperties = {
  padding: "12px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tdStyle: React.CSSProperties = {
  padding: "12px",
  borderBottom: "1px solid #eee",
};

const btnStyle: React.CSSProperties = {
  padding: "10px 18px",
  border: "none",
  backgroundColor: "#08798dff",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  resize: "none",
};

export default ManageService;