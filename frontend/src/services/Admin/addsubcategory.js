
import axios from "axios";

export const addsubcategory = async(category, subcategory) =>{
        try{
          const response = await axios.post("http://localhost:5000/api/adminsubcategory",{category , subcategory});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}