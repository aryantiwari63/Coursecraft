
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
        'Authorization': `Bearer ${token}`, 
      },
    }
);
    
    return res.data;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};