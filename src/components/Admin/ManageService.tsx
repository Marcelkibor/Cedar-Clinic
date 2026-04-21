import { useEffect, useState } from "react";
import { BiLogOut, BiTrash } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { DeleteService, GetServices, PostService } from "./Operations/M.Services";

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

  // ✅ NEW STATES
  const [loading, setLoading] = useState<boolean>(false);
  const [adding, setAdding] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchServices();
  }, []);

  // ✅ AUTO HIDE TOAST
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchServices = async (): Promise<void> => {
    setLoading(true);
    try {
      const result: Service[] = await GetServices();
      setServices(result);
    } catch (error) {
      console.error("Error fetching services:", error);
      setToast("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    window.location.href = "/";
  };

const handleAddService = async (): Promise<void> => {
  if (!name.trim() || !description.trim()) {
    setToast("Please enter service name and description");
    return;
  }
  setAdding(true);
  try {
     await PostService({ name, description });
  } 
  catch (error) {
    console.error("Error adding service:", error);
    setToast("Failed to add service");
  } finally {
    setAdding(false);
    setName("");
    setDescription("");
    await fetchServices();
    setToast("Service added successfully");
  }
};

  const handleDelete = async (service: Service): Promise<void> => {
    const res = await DeleteService(service.id);
    if (res.status === 200) {
      setToast("Service deleted successfully");
      await fetchServices();
    }
  };

  const totalPages = Math.ceil(services.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentServices = services.slice(
    startIndex,
    startIndex + itemsPerPage
  );

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
          <h3 style={{cursor: "pointer"}} onClick={() => (window.location.href = "/admin/dashboard")}>ADMIN DASHBOARD</h3>
        </div>

        {/* ✅ PROGRESS BAR */}
        {(loading || adding) && (
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "#ddd",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#08798dff",
                animation: "loadingBar 1s linear infinite",
              }}
            />
          </div>
        )}

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
            {adding ? "Adding..." : "Add Service"}
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
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
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
                    <BiTrash
                      size={22}
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(service)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <button
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
                style={btnStyle}
              >
                Prev
              </button>

              <span style={{ margin: "0 15px", fontWeight: "bold" }}>
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

        {/* ✅ TOAST */}
        {toast && (
          <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              backgroundColor: "#08798dff",
              color: "white",
              padding: "12px 20px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              zIndex: 1000,
            }}
          >
            {toast}
          </div>
        )}
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