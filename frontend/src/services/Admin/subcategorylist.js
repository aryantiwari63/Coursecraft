
import axios from "axios";

export const adminsubcategorylist = async() =>{
        try{
          const response = await axios.get("http://localhost:5000/api/adminsubcategorylist");
          console.log("sub:",response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}