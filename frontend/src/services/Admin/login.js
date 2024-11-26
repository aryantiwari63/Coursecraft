import axios from "axios";

export const login = (formData) =>{
        try{
                const res = axios.post("http://localhost:5000/api/adminlogin", {formData});
        
    return res;
            
} catch(error){
   
           throw new Error('Network response was not ok: ' + error.message);
         }
}