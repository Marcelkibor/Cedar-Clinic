import { useEffect, useState } from "react";
import { BiLogOut, BiEdit, BiTrash } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { GetInsurance,PostInsurance } from "./Operations/M.Insurance";

interface Insurance {
  id: number;
  name: string;
  image: string;
}

const ManageInsurance = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const itemsPerPage = 5;

  useEffect(() => {
    fetchInsurance();
  }, []);

  const fetchInsurance = async (): Promise<void> => {
    try {
      const result: Insurance[] = await GetInsurance();
      setInsurances(result || []);
    } catch (error) {
      console.error("Error fetching insurance:", error);
    }
  };

  const logout = (): void => {
    window.location.href = "/";
  };

  const handleAddInsurance = async (): Promise<void> => {
    if (!name.trim() || !image.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      await PostInsurance({
        name,
        image,
      });

      setName("");
      setImage("");

      await fetchInsurance();
      setCurrentPage(1);

      alert("Insurance added successfully");
    } catch (error) {
      console.error("Error adding insurance:", error);
      alert("Failed to add insurance");
    }
  };

  const totalPages = Math.ceil(insurances.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentInsurance = insurances.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleEdit = (item: Insurance): void => {
    console.log("Edit:", item);
  };

  const handleDelete = (item: Insurance): void => {
    console.log("Delete:", item);
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
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          <h5>Manage Insurance Providers</h5>
        </div>

        {/* ADD FORM */}
        <div style={cardStyle}>
          <h5 style={{ marginBottom: "15px" }}>Add Insurance Provider</h5>

          <input
            type="text"
            placeholder="Insurance name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          {/* <input
            type="text"
            placeholder="Image key e.g britam"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={inputStyle}
          /> */}

          <button onClick={handleAddInsurance} style={btnStyle}>
            Add Provider
          </button>
        </div>

        {/* TABLE */}
        <div style={cardStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Image</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentInsurance.map((item, index) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{startIndex + index + 1}</td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>{item.image}</td>

                  <td style={tdStyle}>
                    <BiEdit
                      size={22}
                      style={{
                        cursor: "pointer",
                        color: "#0d6efd",
                        marginRight: "10px",
                      }}
                      onClick={() => handleEdit(item)}
                    />

                    <BiTrash
                      size={22}
                      style={{
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={() => handleDelete(item)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <button
                style={btnStyle}
                disabled={currentPage === 1}
                onClick={() =>
                  setCurrentPage((prev) => Math.max(prev - 1, 1))
                }
              >
                Prev
              </button>

              <span style={{ margin: "0 15px", fontWeight: "bold" }}>
                {currentPage} / {totalPages}
              </span>

              <button
                style={btnStyle}
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(prev + 1, totalPages)
                  )
                }
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

/* STYLES */
const cardStyle: React.CSSProperties = {
  width: "95%",
  margin: "20px auto",
  backgroundColor: "#fff",
  borderRadius: "10px",
  padding: "20px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
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

export default ManageInsurance;