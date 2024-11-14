import axios from 'axios';

export const emailpassword =(email)=>{
    try{
       const response = axios.post('http://localhost:5000/api/linksend',{email});
       return response;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }
}