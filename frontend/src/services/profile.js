import axios from "axios"
export const profiledata = async(req,res) =>{
  
  const token = localStorage.getItem('token');
  if(!token){
    throw new Error("token not found");
  }
  //http://localhost:5000/api/profiledetail
    try{     
         const response = await axios.get('https://coursecraft-backend-3pke.onrender.com/api/profiledetail', {
              
                headers: {
                  Authorization: `${token}`,
                }
              });
              
              return response.data;
    }catch(error){
        throw new Error('network error' + error.message);
    }
}
