const axios = require('axios');

export const resetpassword = (newpassword,confirm) =>{
    try{
    const res = axios.post('http://localhost:5000/api/resetpassword',{newpassword,confirm});
    return res;
    }
    catch(error){
        throw new Error('Network response was not ok: ' + error.message);
    }

};