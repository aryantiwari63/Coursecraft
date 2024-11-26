import axios from 'axios';

export const loginservice = async(password,email) => {
  //http://localhost:5000/api/login
    try{
           const res =  await axios.post('https://coursecraft-backend-3pke.onrender.com', {password, email});
          
           return res;
            
     } catch(error){
      if (error.response) {
        return error.response;
      }
                throw new Error('Network response was not ok: ' + error.message);
              }
};
