const axios = require('axios');

export const resetpassword = (newpassword,confirm, token) =>{
    try{
    const res = axios.post('http://localhost:5000/api/resetpassword',{newpassword,confirm, token});
    return res;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }

};