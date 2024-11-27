import axios from 'axios';


export const logoutfun = async()=>{
  //http://localhost:5000/api/logout
    try{
     const token = localStorage.getItem("token");
   console.log(token);
     const res =  await axios.post("https://coursecraft-backend-3pke.onrender.com/api/logout");
     if(res.status == 200){
     localStorage.removeItem("token");
     
     }
   
     return res;
    }
    catch(error){
        console.log(error);
    }
}