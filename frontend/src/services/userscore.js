import axios from 'axios';
export const userscore = async(req,res)=>{

     const token = localStorage.getItem('token');
  try{
        const res = await axios.get("http://localhost:5000/api/userscore",{
          
            headers:{
              Authorization: `${token}`,
            }
          
        });
       
        return  res.data;
  }

  catch(error){
   throw new Error('network error'+ error.message);
  }
}