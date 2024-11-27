

import axios from "axios";

export const adminlist = async() =>{
  //http://localhost:5000/api/adminlist 
        try{
          const response = await axios.get("https://coursecraft-backend-3pke.onrender.com/api/adminlist");
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}