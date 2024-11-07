import axios from 'axios';


export const fetchsignupform = async (name, email, password) => {
  try{
 const response = await axios.post('http://localhost:5000/api/signup',{
  name, email, password
 });
  
 
 return response.data.message;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};