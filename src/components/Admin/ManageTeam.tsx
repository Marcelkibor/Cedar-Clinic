import { useEffect, useState } from "react";
import { BiLogOut, BiTrash } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { AddMember, DeleteMember, GetMembers } from "./Operations/M.Team";

interface TeamMember {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}

const ManageTeam = () => {
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [adding, setAdding] = useState<boolean>(false);
  const [toast, setToast] = useState<string | null>(null);

  const itemsPerPage = 5;

  useEffect(() => {
    fetchMembers();
  }, []);
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const fetchMembers = async (): Promise<void> => {
    setLoading(true);
    try {
      const result: TeamMember[] = await GetMembers();
      setMembers(result);
    } catch (error) {
      console.error("Error fetching members:", error);
      setToast("Failed to load team members");
    } finally {
      setLoading(false);
    }
  };

  const logout = (): void => {
    window.location.href = "/";
  };

  const handleAddMember = async (): Promise<void> => {
    if (
      !name.trim() ||
      !image.trim() ||
      !title.trim() ||
      !description.trim()
    ) {
      setToast("Please fill all fields");
      return;
    }

    setAdding(true);
    try {
      let data = {
        name,
        image,
        title,
        description,
      };
      let res = await AddMember(data);
      if(res.status == 200){
        setToast("Member added successfully");
       setName("");
       setImage("");
       setTitle("");
       setDescription("");
      }
      else{
        setToast("Failed to add member");
        setName("");
        setImage("");
        setTitle("");
        setDescription("");
      }

      await fetchMembers();
      setCurrentPage(1);
    } catch (error) {
      console.error("Error adding member:", error);
      setToast("Failed to add member");
    } finally {
      setAdding(false);
    }
  };

  const totalPages = Math.ceil(members.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentMembers = members.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleDelete = async (member: TeamMember): Promise<void> => {
    let res = await DeleteMember(member.id);
    if(res.status == 200){
      setLoading(true);
      setToast("Member deleted successfully");
      await fetchMembers();
    }
    else{
      setToast("Failed to delete member");
    }
    setLoading(false);
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
          <h6 style={{ cursor: "pointer" }}>Dashboard</h6>
        </div>

        <div className="sidebar-item logout" onClick={logout}>
          <BiLogOut size={30} />
          <h6 style={{ cursor: "pointer" }}>Logout</h6>
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
            marginTop: "10px",
            fontWeight: "bold",
          }}
        >
          <h5>Manage Team Members</h5>
        </div>

        {/* ADD MEMBER FORM */}
        <div style={cardStyle}>
          <h5 style={{ marginBottom: "15px" }}>Add Team Member</h5>

          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Title e.g Doctor"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Description"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={textareaStyle}
          />

          <button onClick={handleAddMember} style={btnStyle}>
            {adding ? "Adding..." : "Add Member"}
          </button>
        </div>

        {/* TABLE */}
        <div style={cardStyle}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f2f2f2" }}>
                <th style={thStyle}>#</th>
                <th style={thStyle}>Name</th>
                <th style={thStyle}>Title</th>
                <th style={thStyle}>Description</th>
                <th style={thStyle}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {currentMembers.map((member, index) => (
                <tr key={member.id}>
                  <td style={tdStyle}>{startIndex + index + 1}</td>
                  <td style={tdStyle}>{member.name}</td>
                  <td style={tdStyle}>{member.title}</td>

                  <td style={tdStyle}>
                    {member.description.length > 70
                      ? `${member.description.slice(0, 70)}...`
                      : member.description}
                  </td>

                  <td style={tdStyle}>
                    <BiTrash
                      size={22}
                      style={{ cursor: "pointer", color: "red" }}
                      onClick={() => handleDelete(member)}
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

const textareaStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  resize: "none",
};

export default ManageTeam;