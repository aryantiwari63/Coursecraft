import axios from 'axios';

export const emailpassword =(email)=>{
    //http://localhost:5000/api/linksend
    try{
       const response = axios.post('https://coursecraft-backend-3pke.onrender.com',{email});
       return response;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }
}