import axios from 'axios';


export const unenroll = async(id)=>{

     const token = localStorage.getItem('token');
     
  try{
        const res = await axios.post("http://localhost:5000/api/unenroll",
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