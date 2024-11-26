import axios from 'axios';

export const loginservice = async(password,email) => {
    try{
           const res =  await axios.post('http://localhost:5000/api/login', {password, email});
          
           return res;
            
     } catch(error){
      if (error.response) {
        return error.response;
      }
                throw new Error('Network response was not ok: ' + error.message);
              }
};
