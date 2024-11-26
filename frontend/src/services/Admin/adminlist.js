

import axios from "axios";

export const adminlist = async() =>{
        try{
          const response = await axios.get("http://localhost:5000/api/adminlist");
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}