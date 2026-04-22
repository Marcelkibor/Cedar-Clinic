import { useEffect, useState } from "react";
import { BiLogOut, BiTrash } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { DeleteInsurance, GetInsurance, PostInsurance } from "./Operations/M.Insurance";

interface Insurance {
  id: number;
  name: string;
  image: string;
}

const ManageInsurance = () => {
  const [insurances, setInsurances] = useState<Insurance[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // ✅ loading + toast
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchInsurance();
  }, []);

  // ✅ auto hide toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchInsurance = async (): Promise<void> => {
    setLoading(true);
    try {
      const result: Insurance[] = await GetInsurance();
      setInsurances(result || []);
    } catch (error) {
      console.error("Error fetching insurance:", error);
      setToast("Failed to load insurance providers");
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    window.location.href = "/";
  };

  // ✅ handle file
  const handleImageChange = (file: File) => {
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleAddInsurance = async (): Promise<void> => {
    if (!name.trim() || !image) {
      setToast("Please fill all fields");
      return;
    }
    setAdding(true);
    try {
      const formdata = {name:name, image:image};
      let res = await PostInsurance(formdata);
      console.log("Add insurance response:", res);
      setName("");
      setImage(null);
      setPreview(null);
      await fetchInsurance();
      setCurrentPage(1);
      setToast("Insurance added successfully");
    } catch (error) {
      console.error("Error adding insurance:", error);
      setToast("Failed to add insurance");
    } finally {
      setAdding(false);
    }
  };

  const totalPages = Math.ceil(insurances.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentInsurance = insurances.slice(
    startIndex,
    startIndex + itemsPerPage
  );


  const handleDelete = async (item: Insurance): Promise<void> => {
    let res = await DeleteInsurance(item.id);
    if(res.status ===200){
      setToast("Insurance deleted successfully");
      setName("");
      setImage(null);
      setPreview(null);
      await fetchInsurance();
    }else{
      setToast("Failed to delete insurance");
    }
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

        {/* ✅ LOADING BAR */}
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

          {/* ✅ IMAGE PICKER */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                handleImageChange(e.target.files[0]);
              }
            }}
            style={inputStyle}
          />

          {/* ✅ PREVIEW */}
          {preview && (
            <img
              src={preview}
              alt="preview"
              style={{
                width: "100px",
                height: "100px",
                objectFit: "cover",
                borderRadius: "8px",
                marginBottom: "15px",
              }}
            />
          )}

          <button onClick={handleAddInsurance} style={btnStyle}>
            {adding ? "Adding..." : "Add Provider"}
          </button>
        </div>

        {/* TABLE */}
        <div style={cardStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentInsurance.map((item, index) => (
                <tr key={item.id}>
                  <td style={tdStyle}>{startIndex + index + 1}</td>
                  <td style={tdStyle}>{item.name}</td>
                  <td style={tdStyle}>
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