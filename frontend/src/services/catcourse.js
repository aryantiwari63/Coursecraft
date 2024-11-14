import axios from "axios";



export const categorycourse = async (category) => {
   
    try {
        const response = await axios.get("http://localhost:5000/api/categorycourse", {
            params: { category },
        });
       
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
