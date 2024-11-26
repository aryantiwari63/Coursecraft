import axios from 'axios';

export const enrolllist = async()=>{
    const token = localStorage.getItem('token');
    console.log(token);
    try{
    const res = await axios.get('http://localhost:5000/api/getenrolllist',{
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