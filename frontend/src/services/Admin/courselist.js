
import axios from "axios";

export const admincourselist = async() =>{
  //http://localhost:5000/api/admincourselist 
        try{
          const response = await axios.get("https://coursecraft-backend-3pke.onrender.com");
          console.log(response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}

export const adminremovecourse = async(id) =>{
  //http://localhost:5000/api/adminremovecourse 
  try{
    const response = await axios.delete("https://coursecraft-backend-3pke.onrender.com",{ data: { id } });
    console.log(response);
    return response;
  }catch(error){
      throw new Error(error);
  }

}

