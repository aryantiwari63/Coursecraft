import axios from 'axios';


export const signup = async (formData) => {
  //http://localhost:5000/api/adminsignup 
  try{
 const response = await axios.post('https://coursecraft-backend-3pke.onrender.com',{
  formData
 });
  
 
 return response;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};
