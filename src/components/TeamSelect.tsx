// TeamSelect.js
import React from "react";
import { useParams } from "react-router-dom"; // Import useParams
import clinicMembers from "./DataFiles/ClinicMembers";
const TeamSelect = () => {
  const { id } = useParams<{ id?: string }>(); // Provide type for id to handle undefined

  // Check if the 'id' parameter is defined
  if (!id) {
    return <div>No team member selected</div>;
  }

  // Convert the 'id' parameter to a number using parseInt
  const memberId = parseInt(id);

  // Find the clinic member with the corresponding ID
  const selectedMember = clinicMembers.find((item:any) => item.id === memberId);

  // Render the profile details
  return (
    <div>
      {selectedMember ? (
        <div>
          <h2>{selectedMember.name}</h2>
          <p>Title: {selectedMember.title}</p>
          {/* Add more profile details here */}
        </div>
      ) : (
        <p>Team member not found</p>
      )}
    </div>
  );
};

export default TeamSelect;
