import axios from 'axios';


export const userscore = async()=>{

     const token = localStorage.getItem('token');
     //http://localhost:5000/api/userscore
  try{
        const res = await axios.get("https://coursecraft-backend-3pke.onrender.com",{
        
            headers:{
              Authorization: `${token}`,
            }
          
        });
        console.log(res);
        return  res.data;
  }

  catch(error){
   throw new Error('network error'+ error.message);
  }
}