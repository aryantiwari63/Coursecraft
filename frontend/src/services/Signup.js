import axios from 'axios';


export const fetchsignupform = async (name, email, password) => {
  //http://localhost:5000/api/signup
  try{
 const response = await axios.post('https://coursecraft-backend-3pke.onrender.com/api/signup',{
  name, email, password
 });
  
 
 return response.data.message;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};
