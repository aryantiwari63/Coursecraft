const axios = require('axios');

export const resetpassword = (newpassword,confirm, token) =>{
    //http://localhost:5000/api/resetpassword
    try{
    const res = axios.post('https://coursecraft-backend-3pke.onrender.com',{newpassword,confirm, token});
    return res;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }

};