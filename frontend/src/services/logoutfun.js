import axios from 'axios';


export const logoutfun = async()=>{
  
    try{
     const token = localStorage.getItem("token");
   console.log(token);
     const res =  await axios.post("http://localhost:5000/api/logout");
     localStorage.removeItem("token");
   
     return res;
    }
    catch(error){
        console.log(error);
    }
}