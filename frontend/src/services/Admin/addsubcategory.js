
import axios from "axios";

export const addsubcategory = async(category, subcategory) =>{
  //http://localhost:5000/api/adminsubcategory 
        try{
          const response = await axios.post("https://coursecraft-backend-3pke.onrender.com/api/adminsubcategory",{category , subcategory});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}