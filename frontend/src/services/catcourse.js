import axios from "axios";



export const categorycourse = async (category) => {
   //http://localhost:5000/api/categorycourse
    try {
        const response = await axios.get("https://coursecraft-backend-3pke.onrender.com", {
            params: { category },
        });
       
        return response;
    } catch (error) {
        console.error("Error fetching courses:", error);
        throw error;
    }
};
