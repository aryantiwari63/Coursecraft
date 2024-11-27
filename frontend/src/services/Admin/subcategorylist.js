
import axios from "axios";

export const adminsubcategorylist = async() =>{
  //http://localhost:5000/api/adminsubcategorylist 
        try{
          const response = await axios.get("https://coursecraft-backend-3pke.onrender.com/api/adminsubcategorylist");
          console.log("sub:",response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}



