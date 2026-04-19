export const PostInsurance = async (data:any) => {
    try {
        const requestBody =data;
        // const BaseUrl = "http://localhost:5000";
        const response = await fetch(`/api/add-insurance`, {
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
        console.error("Error posting insurance data:", error);
    }
}
export const GetInsurance = async () => {
    try {
        // const BaseUrl = "http://localhost:5000";
        const response = await fetch(`/api/get-insurances`, {
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
        console.error("Error fetching insurance data:", error);
    }
}