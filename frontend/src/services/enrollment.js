import axios from 'axios';

export const enrollment = async(email, courseid) =>{
  //http://localhost:5000/api/enroll
      try{
         const response = axios.post('https://coursecraft-backend-3pke.onrender.com/api/enroll', {email, courseid});
         console.log("after enrollment", response);
         return response;
      }
      catch(error){
        console.log(error);
        throw new Error('Enrollment failed');
      }
          
}; 