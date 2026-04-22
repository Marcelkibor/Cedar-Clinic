export const AddMember = async (data:any) => {
    console.log("Adding member with data:", data);
    try {
        const requestBody =data;    
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`/api/add-member`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error("Error posting booking data:", error);
    }
}
export const GetMembers = async () => {
    try {
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`/api/get-members`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "GET",
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;

    }
    catch (error) {
        console.error("Error fetching services data:", error);
    }
}
export const DeleteMember = async (id:number) => {
    try {
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`/api/delete-member`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id }),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error("Error deleting member data:", error);
    }
}