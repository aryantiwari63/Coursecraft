import axios from 'axios';

export const enrolllist = async()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    //http://localhost:5000/api/getenrolllist
    try{
    const res = await axios.get('https://coursecraft-backend-3pke.onrender.com',{
        headers:{
            Authorization : `${token}`,
        }
      
    });
    console.log(res);
    return res;
}
catch(error){
    throw new Error(error);
}
}