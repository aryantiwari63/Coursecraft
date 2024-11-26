import React, { useEffect, useState } from 'react'
import user from '../images/userimg.jpg';
import {Link, useNavigate} from 'react-router-dom';
import { logoutfun } from '../services/logoutfun';
import {profiledata} from '../services/profile';

      
function Profile() {
     const [userdetail, setUserDetail] = useState("");
      const [logoutbut, setLogoutbut] = useState(false);
     const navigate = useNavigate();

     const logouthandle = async()=>{
          const response = await logoutfun();
          console.log(response);
          if(response.status === 200){
               setLogoutbut(true);
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
          <Link to="/enrollcourselist">
           <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md  flex items-center justify-center'>
                <h3>Enrollment Courses</h3>
             
           </div>
           </Link>
           <Link to="/scoretable">
           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Test Score</h3>
           </div>
           </Link>
           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Notifications</h3>
           </div>

           <div className='w-36 h-24 bg-[rgb(224,224,247)]  rounded-md flex items-center justify-center'>
                <h3>Bookmarks</h3>
           </div>
            
            <div className={`${logoutbut ? 'hidden' : 'block' } bg-black text-white font-bold h-8 rounded-full px-2`} onClick={logouthandle}>
               <button>Logout</button>
            </div>
        </div>

    </div>
  )
}

export default Profile

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { logoutfun } from '../services/logoutfun';
// import { profiledata } from '../services/profile';
// import user from '../images/userimg.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCamera } from '@fortawesome/free-solid-svg-icons';

// function Profile() {
//   const [userdetail, setUserDetail] = useState("");
//   const [logoutbut, setLogoutbut] = useState(true);
//   const [profileImage, setProfileImage] = useState(user); // Default to the existing profile image
//   const navigate = useNavigate();

//   const logouthandle = () => {
//     const response = logoutfun();
//     if (response) {
//       setLogoutbut(false);
//       console.log("logout");
//       navigate("/login");
//     }
//   };

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await profiledata();
//         console.log("check response is", response);
//         if (response && response.user) {
//           setUserDetail(response.user);
//           setProfileImage(response.user.profileImage || user); // Set profile image from API
//         }
//       } catch (error) {
//         console.error('Error fetching profile data:', error);
//       }
//     };
//     fetchUserData();
//   }, []);

//   const handleImageChange = async (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append("image", file);
//       formData.append("userId", userdetail._id); 

//       try {
//         const response = await fetch('http://localhost:5000/api/upload-profile-image', {
//           method: 'POST',
//           body: formData,
//         });
//         const data = await response.json();
//         if (data.profileImage) {
//           setProfileImage(data.profileImage); 
//           setUserDetail({ ...userdetail, profileImage: data.profileImage }); 
//         }
//       } catch (error) {
//         console.error("Error uploading profile image:", error);
//       }
//     }
//   };

//   return (
//     <div className='flex flex-col gap-y-6'>
//       <div className='w-[300px] mx-auto mt-4 lg:flex lg:w-[400px] lg:justify-between'>
//         <div className="relative">
//           <img src={profileImage} className='h-34 w-32 mx-auto my-3 rounded-md' />
      
//           <label htmlFor="profileImageInput" className="absolute bottom-0 right-0 p-2 cursor-pointer">
//             <FontAwesomeIcon icon={faCamera} className="text-xl text-white bg-black rounded-full p-1" />
//           </label>
//           <input
//             id="profileImageInput"
//             type="file"
//             className="hidden"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <p className='text-2xl font-bold'>{userdetail.name}</p>
//           <p className='text-red-300 font-bold'>{userdetail.email}</p>
//           <button
//             className={`text-white font-bold rounded-md bg-black w-[80px] mt-4 ${logoutbut ? "block" : "hidden"}`}
//             onClick={logouthandle}
//           >
//             Logout
//           </button>
//         </div>
//       </div>
//       <div className='flex max-w-[320px] md:w-[540px] h-[280px] justify-between gap-x-3 flex-wrap mx-auto'>
//         <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md flex items-center justify-center'>
//           <h3>Enrollment Courses</h3>
//         </div>
//         <Link to="/scoretable">
//           <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md flex items-center justify-center'>
//             <h3>Test Score</h3>
//           </div>
//         </Link>
//         <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md flex items-center justify-center'>
//           <h3>Notifications</h3>
//         </div>
//         <div className='w-36 h-24 bg-[rgb(224,224,247)] rounded-md flex items-center justify-center'>
//           <h3>Bookmarks</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;
