
import axios from "axios";

export const blocklist = async(email) =>{
  //http://localhost:5000/api/adminblocklist 
        try{
          const response = await axios.post("https://coursecraft-backend-3pke.onrender.com/api/adminblocklist",{email});
          console.log(response);
          return response;
        }catch(error){
            throw new Error(error);
        }
}


export const unblocklist = async(email) =>{
  //http://localhost:5000/api/adminunblocklist  
  try{
    const response = await axios.post("https://coursecraft-backend-3pke.onrender.com",{email});
    console.log(response);
    return response;
  }catch(error){
      throw new Error(error);
  }
}