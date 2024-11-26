import axios from "axios";



export const subcategory = async (category) => {
   //http://localhost:5000/api/getsubcategory
    try {
        const response = await axios.get("https://coursecraft-backend-3pke.onrender.com", {
            params: { category },
        });
        console.log(response);
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
