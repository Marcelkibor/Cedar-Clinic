export const AddMember = async (data:any) => {
    try {
        const requestBody =data;    
        const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${BaseUrl}/api/add-member`, {
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
        const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${BaseUrl}/api/get-members`, {
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