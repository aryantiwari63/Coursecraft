
import axios from 'axios';

export const getquestion = async (category) => {
  //http://localhost:5000/api/getquestion 
  try {
    console.log(category);
    const res = await axios.get('https://coursecraft-backend-3pke.onrender.com', {
      params: {
        category, 
      },
    });
    
    return res.data;
  } catch (error) {
    throw new Error('Network response was not ok: ' + error.message);
  }
};
