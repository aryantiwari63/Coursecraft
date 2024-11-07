
import axios from 'axios';

export const getquestion = async (category) => {
  try {
    console.log(category);
    const res = await axios.get('http://localhost:5000/api/getquestion', {
      params: {
        category, 
      },
    });
    
    return res.data;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};
