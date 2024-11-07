import React, { useEffect, useState } from 'react'
import user from '../images/userimg.jpg';
import {useNavigate} from 'react-router-dom';
import { logoutfun } from '../services/logoutfun';
import {profiledata} from '../services/profile';
import {check} from '../services/check';
      
function Profile() {
     const [userdetail, setUserDetail] = useState("");
      const [logoutbut, setLogoutbut] = useState(true);
     const navigate = useNavigate();
     const logouthandle =()=>{
          const response = logoutfun();
          if(response){
               setLogoutbut(false);
               console.log("logout");
               navigate("/login");
          }
     }
      
     useEffect(() => {
          const fetchUserData = async () => {
            try {
              const response = await profiledata();  
              console.log("check response is", response);
              if (response && response.user) {
             
                setUserDetail(response.user);  
           
              }
            } catch (error) {
              console.error('Error fetching profile data:', error);
            }
          };
          fetchUserData();
        }, []);
  
  return (
    <div className='flex flex-col gap-y-6'>
        <div className='w-[300px]  mx-auto mt-4 lg:flex lg:w-[400px] lg:justify-between'>
            <div>
            <img src={user} className='h-34 w-32 mx-auto my-3 rounded-md'/>
            </div>
            <div class="flex flex-col items-center justify-center">
            <p className='text-2xl font-bold'>{userdetail.name}</p>
            <p className='text-red-300 font-bold'>{userdetail.email}</p>
            <button className={`text-white font-bold  rounded-md bg-black w-[80px] mt-4 $({logoutbut} ? block : hidden )`} onClick={logouthandle}>logout</button>
            </div>
        </div>
        <div className='flex max-w-[320px] md:w-[540px] h-[280px] justify-between gap-x-3 flex-wrap mx-auto'>
           <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md  flex items-center justify-center'>
                <h3>Enrollment Courses</h3>
            
           </div>
           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Test Score</h3>
           </div>

           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Notifications</h3>
           </div>

           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Bookmarks</h3>
           </div>
        </div>

    </div>
  )
}

export default Profile