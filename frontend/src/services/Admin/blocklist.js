
import axios from "axios";

export const blocklist = async(email) =>{
        try{
          const response = await axios.post("http://localhost:5000/api/adminblocklist",{email});
          console.log(response);
          return response;
        }catch(error){
            throw new Error(error);
        }
}


export const unblocklist = async(email) =>{
  try{
    const response = await axios.post("http://localhost:5000/api/adminunblocklist",{email});
    console.log(response);
    return response;
  }catch(error){
      throw new Error(error);
  }
}