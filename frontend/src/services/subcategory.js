import axios from "axios";



export const subcategory = async (category) => {
   
    try {
        const response = await axios.get("http://localhost:5000/api/getsubcategory", {
            params: { category },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
