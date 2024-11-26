import axios from "axios";

export const login = (formData) =>{
        //http://localhost:5000/api/adminlogin 
        try{
                const res = axios.post("https://coursecraft-backend-3pke.onrender.com", {formData});
        
    return res;
            
} catch(error){
   
           throw new Error('Network response was not ok: ' + error.message);
         }
}