import axios from "axios";

export const addcourse = async(formDataWithNumber) =>{
        try{
          const response = await axios.post("http://localhost:5000/api/addminaddcourse",{formDataWithNumber});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}