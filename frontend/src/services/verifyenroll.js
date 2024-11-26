// import axios from "axios"

// export const enrollverify = async(courseid )=>{
//          const token = localStorage.getItem('token');
//          const response = axios.get("http://localhost:5000/api/verifyenroll",{
//             params: { courseid },
         
//              headers:{
//                     'Authorization':`${token}`,
//                 },
            
//          });

// }
import axios from "axios";

export const enrollverify = async (courseid) => {
 
  const token = localStorage.getItem('token');
  console.log("token is",token);
  // const response = await axios.get("http://localhost:5000/api/verifyenroll", {
  //   params: { courseid },
  //   headers: {
  //     Authorization: `${token}`,  
  //   },
  // });

  const response = await axios.get("http://localhost:5000/api/verifyenroll",{
    params: { courseid },
    headers:{
      Authorization: `${token}`,
    }
  
});

 console.log(response);
  return response;
};
