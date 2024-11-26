
import axios from 'axios';

export const submitscore = async (category,selectedOptions) => {
    const token = localStorage.getItem('token'); 
  try {
    console.log(category);
    const res = await axios.post('http://localhost:5000/api/submitscore', {
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