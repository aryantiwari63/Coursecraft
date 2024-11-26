
import axios from 'axios';

export const submitscore = async (category,selectedOptions) => {
    const token = localStorage.getItem('token'); 
    //http://localhost:5000/api/submitscore
  try {
    console.log(category);
    const res = await axios.post('https://coursecraft-backend-3pke.onrender.com', {
        category, selectedOptions
    },
    {
      headers: {
        Authorization: `${token}`, 
      },
    }
);
    
    return res;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};