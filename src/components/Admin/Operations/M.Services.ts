export const PostService = async (data:any) => {
    try {
        const requestBody =data;
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
           const response = await fetch(`/api/add-service`, {
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
        return result
        
    }
    catch (error) {
        console.error("Error posting booking data:", error);
    }
}
export const GetServices = async () => {
    try {
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`/api/get-services`, {
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
export const DeleteService = async (id:number) => {
    try {
        // const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`/api/delete-service`, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ id })
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (error) {
        console.error("Error deleting service data:", error);
    }
}