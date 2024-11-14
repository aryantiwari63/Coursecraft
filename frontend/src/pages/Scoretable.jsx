// import React, { useEffect, useState } from 'react'
// import {userscore} from '../services/userscore';

// function Scoretable() {
//       const [score, setScore] = useState({});

//     const fetchscore = async()=>{
//         try{
//       const res = await userscore();
//       console.log("on main page",res);
//       if(res){
//         setScore(res.user);
//         console.log("state is",score);
//       }
//     }
//     catch(error){
//         throw new Error(error);
//     }
      
// }

// useEffect(()=>{
//     fetchscore();
// },[])

//   return (
//     <div>
//           <div className='w-[50%]'>
//             <div className='w-full'>
//             <ul className='flex justify-evenly'>
//                 <li>Test Name</li>
//                 <li>Score</li>
//             </ul>
//             </div>
//             <div className='w-full'>
//                 <ul className='flex justify-evenly'>
//                     <li>verbal</li>
//                      <li>{score.Verbal}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Numerical</li>
//                      <li>{score.Numerical}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Abstract</li>
//                      <li>{score.Abstract}</li>
//                 </ul>
//                 <ul className='flex justify-evenly'>
//                     <li>Personality</li>
//                      <li>{score.Personality}</li>
//                 </ul>
//             </div>
//           </div>
//     </div>
//   )
// }

// export default Scoretable

import React, { useEffect, useState } from 'react';
import { userscore } from '../services/userscore';

function Scoretable() {
  const [score, setScore] = useState({});

  const fetchscore = async () => {
    try {
      const res = await userscore();
      console.log("on main page", res);
      if (res) {
        setScore(res.user);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchscore();
  }, []);

  return (
    <div className="w-[50%] mx-auto my-12">
      <div className="w-full">
        <ul className="flex justify-between font-bold border-b pb-2 mb-2">
          <li>Test Name</li>
          <li>Score</li>
        </ul>
      </div>
      <div className="w-full">
        <ul className="flex justify-between py-2 border-b">
          <li>Verbal</li>
          <li>{score.Verbal === -1 ? "Give Test" : score.Verbal}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Numerical</li>
          <li>{score.Numerical === -1 ? "Give Test" : score.Numerical}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Abstract</li>
          <li>{score.Abstract === -1 ? "Give Test" : score.Abstract}</li>
        </ul>
        <ul className="flex justify-between py-2 border-b">
          <li>Personality</li>
          <li>{score.Personality === -1 ? "Give Test" : score.Personality}</li>
        </ul>
      </div>
    </div>
  );
}

export default Scoretable;
