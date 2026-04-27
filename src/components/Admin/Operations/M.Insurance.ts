export const PostInsurance = async (data: any) => {
  try {
    const BaseUrl = import.meta.env.VITE_BASE_URL;
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", data.image);
    const response = await fetch(`${BaseUrl}/api/add-insurance`, {
      method: "POST",
      body: formData, 
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error posting insurance data:", error);
    throw error;
  }
};
export const GetInsurance = async () => {
    try {
        const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${BaseUrl}/api/get-insurances`, {
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
export const DeleteInsurance = async (id:number) => {
    // console.log("Deleting insurance with ID:", id);
    try {
        const BaseUrl = import.meta.env.VITE_BASE_URL;
        const response = await fetch(`${BaseUrl}/api/delete-insurance`, {
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
        console.error("Error deleting insurance data:", error);
    }
}