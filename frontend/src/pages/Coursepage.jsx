import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faGraduationCap, faBriefcase, faUsersRectangle, faCertificate } from '@fortawesome/free-solid-svg-icons';
import iso from '../images/isocourse.jpg';
import cyber from '../images/ctbersecurity.jpg';
import diplomamanagement from '../images/diplomamanagement.jpg';
import dataprotect from '../images/dataprotection.jpg'
import certificate from '../images/certificate.PNG'

function Coursepage() {
  return (
    <div>
          <div className='bg-[rgb(241,248,248)] pt-10'>
               <h1 className='font-[900] text-2xl text-center'> Free Online IT and Computing Courses </h1>
               <p className='p-6 text-sm'>IT is one of our most popular categories, with in-depth courses and tutorials across all aspects of information technology. Sign up today to learn about cryptocurrency, blockchain, computer networking and server management. You can take free classes for in-demand languages like Python, JavaScript and C++, applying for official certification to take your programming career to the next level. We also cover growing skills like pentestin...</p>
          </div>
          
          <div className='pt-10'>
            <h2 className='font-[900] text-2xl text-center'>Explore Top Subjects</h2>
            <div className='p-6 pl-14 flex flex-wrap gap-4 text-sm'>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Technology</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Coding</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Data Analysis</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Web Design</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Cyber Security</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Cloud Computing</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Web Development</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Databases</div>
                <div className='bg-[rgb(240,244,247)] text-[rgb(94,104,111)] p-1 rounded-md'>Network Security</div>
            </div>
          </div>   
          {/*this is part of specific courses category */}
          <div>
            <div className='flex justify-between p-2'><div><p className='font-bold text-xl'>Most Popular</p><p className='text-[rgb(1,108,148)] font-bold'>IT Courses</p></div><div className='text-green-700 text-md font-bold underline'>View All Courses</div></div>
             <div className='p-12 md:pl-24 flex flex-wrap gap-4'>
                 <div className='w-[260px] shadow-2xl'>
                    <div><img src={ cyber}/></div>
                    <div className='p-4 flex flex-col gap-y-6'>
                        <h3 className="line-clamp-2">Cybersecurity Incident Response Planning & Management</h3>
                        
                        <div className='flex justify-between'><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faClock} className=''/><p>3-4 hrs</p></div><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faGraduationCap}/><p>40,204 learners</p></div></div>
                        <div className='flex justify-around'><button className='p-3 rounded-md text-sm font-bold '>More Info</button><button className=' bg-green-700 text-white rounded-xl text-sm font-bold p-2 h-8'>Start Learning</button></div>
                         
                    </div>
                       
                      
                 </div>
                  
                 <div className='w-[260px] shadow-2xl'>
                    <div><img src={ diplomamanagement}/></div>
                    <div className='p-4 flex flex-col gap-y-6'>
                        <h3 className="line-clamp-2">Diploma in Management Information Systems - An Introduction</h3>
                        <div className='flex justify-between '><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faClock} className=''/><p>3-4 hrs</p></div><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faGraduationCap}/><p>40,204 learners</p></div></div>
                        <div className='flex justify-around'><button className='p-2 rounded-md text-sm font-bold h-8'>More Info</button><button className=' bg-green-700 text-white rounded-xl text-sm font-bold p-2 h-8'>Start Learning</button></div>
                    </div>
                   
                   
                 </div>

                 <div className='w-[260px] shadow-2xl'>
                    <div><img src={ dataprotect}/></div>
                    <div className='p-4 flex flex-col gap-y-6'>
                     
                        <h3 className="line-clamp-2">Data Protection Officer Training</h3>
                        
    
                        <div className='flex justify-between'><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faClock} className=''/><p>3-4 hrs</p></div><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faGraduationCap}/><p>40,204 learners</p></div></div>
                        <div className='flex justify-around'><button className='p-3 rounded-md text-sm font-bold '>More Info</button><button className=' bg-green-700 text-white rounded-xl text-sm font-bold p-2 h-8'>Start Learning</button></div>
                       
                    </div>
                   
                    
                 </div>

                 <div className='w-[260px] shadow-2xl'>
                    <div><img src={ iso}/></div>
                    <div className='p-4 flex flex-col gap-y-6'>
                        <h3 className="line-clamp-2">ISO/IEC 27001 - Dynamics of Information Security Management System (ISMS)</h3>
                        <div className='flex justify-between'><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faClock} className=''/><p>3-4 hrs</p></div><div className='flex gap-x-2 text-sm'><FontAwesomeIcon icon={faGraduationCap}/><p>40,204 learners</p></div></div>
                        <div className='flex justify-around'><button className='p-3 rounded-md text-sm font-bold '>More Info</button><button className=' bg-green-700 text-white rounded-xl text-sm font-bold p-2 h-8'>Start Learning</button></div>
                    </div>
                   
                    
                 </div>
             </div>
          </div>


             <div className='bg-[rgb(235,245,219)] '>
               <div className='flex justify-center pt-10'><div className='flex flex-col gap-y-6 '><h2 className='font-bold text-2xl '>Benefits Of An Alison Certificate </h2><img src={certificate}/></div></div> 
               
               <div className='flex flex-col gap-y-4 p-8 pt-12'>
                <div className='flex gap-x-4'><div className='bg-[rgb(194,224,144)] h-8 w-8 rounded-full'><FontAwesomeIcon icon={faBriefcase} className='p-2'/></div><div><h5 className='text-[rgb(70,81,89)] text-start font-bold text-md'>Certify Your Skills</h5><p className='text-sm'> A CPD accredited Alison Certificate certifies the skills you’ve learned </p></div></div>
                <div className='flex gap-x-4'><div className='bg-[rgb(194,224,144)] h-8 w-8 rounded-full'><FontAwesomeIcon icon={faUsersRectangle} className='p-2'/></div><div><h5 className='text-[rgb(70,81,89)] text-start font-bold text-md'>Stand Out From The Crowd</h5><p className='text-sm'>  Add your Alison Certification to your resumé and stay ahead of the competition  </p></div></div>
                <div className='flex gap-x-4'><div className='bg-[rgb(194,224,144)] h-8 w-8 rounded-full'><FontAwesomeIcon icon={faCertificate} className='p-2'/></div><div><h5 className='text-[rgb(70,81,89)] text-start font-bold text-md'>Advance in Your Career</h5><p className='text-sm'>  Share your Alison Certification with potential employers to show off your skills and capabilities  </p></div></div>
                </div>
             </div>
    </div>
  )
}

export default Coursepage