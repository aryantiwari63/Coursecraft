import axios from 'axios';


export const check = async (checkname) => {
  try{
    const token = localStorage.getItem('token')
 const response = await axios.post('http://localhost:5000/api/check',{
      headers:{
        'Authorization':` ${token}`,
      },
 });
  
 
 return response.data.message;
  }
  catch(error){
    throw new Error('Network response was not ok: ' + error.message);
  }
};