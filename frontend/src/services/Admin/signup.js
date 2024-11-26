import axios from 'axios';


export const signup = async (formData) => {
  try{
 const response = await axios.post('http://localhost:5000/api/adminsignup',{
  formData
 });
  
 
 return response;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};
