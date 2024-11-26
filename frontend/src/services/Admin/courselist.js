
import axios from "axios";

export const admincourselist = async() =>{
        try{
          const response = await axios.get("http://localhost:5000/api/admincourselist");
          console.log(response);
          return response.data;
        }catch(error){
            throw new Error(error);
        }
   
}

export const adminremovecourse = async(id) =>{
  try{
    const response = await axios.delete("http://localhost:5000/api/adminremovecourse",{ data: { id } });
    console.log(response);
    return response;
  }catch(error){
      throw new Error(error);
  }

}

