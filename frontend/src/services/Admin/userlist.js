

import axios from "axios";

export const adminuserlist = async() =>{
  //http://localhost:5000/api/adminuserlist 
        try{
          const response = await axios.get("https://coursecraft-backend-3pke.onrender.com/api/adminuserlist");
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}