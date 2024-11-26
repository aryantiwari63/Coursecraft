

import axios from "axios";

export const adminuserlist = async() =>{
        try{
          const response = await axios.get("http://localhost:5000/api/adminuserlist");
          
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}