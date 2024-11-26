import axios from 'axios';


export const unenroll = async(id)=>{

     const token = localStorage.getItem('token');
     //http://localhost:5000/api/unenroll
  try{
        const res = await axios.post("https://coursecraft-backend-3pke.onrender.com",
            {courseid : id},{
          
            headers:{
              Authorization: `${token}`,
            }
          
        });
      
        return  res;
  }

  catch(error){
   throw new Error('network error'+ error.message);
  }
}