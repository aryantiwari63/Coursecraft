import axios from 'axios';

export const enrollment = async(email, courseid) =>{
      try{
         const response = axios.post('http://localhost:5000/api/enroll', {email, courseid});
         console.log("after enrollment", response);
         return response;
      }
      catch(error){
        console.log(error);
        throw new Error('Enrollment failed');
      }
          
}; 