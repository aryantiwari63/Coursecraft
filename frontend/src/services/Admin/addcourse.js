import axios from "axios";

export const addcourse = async(formDataWithNumber) =>{
  //http://localhost:5000/api/addminaddcourse
        try{
          const response = await axios.post("https://coursecraft-backend-3pke.onrender.com/api/addminaddcourse",{formDataWithNumber});
          return response;
        }catch(error){
            throw new Error(error);
        }
   
          
}