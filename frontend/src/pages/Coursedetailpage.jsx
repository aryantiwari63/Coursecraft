import React, { useState } from 'react'
import { faGraduationCap, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cyber from '../images/ctbersecurity.jpg';

function Coursedetailpage() {

  const [isDescription, setIsDescription] = useState(true);
  const [isModule, setIsModule] = useState(false);

  const handleoption = (option) => {
    if (option === 'description') {
      setIsDescription(true);
      setIsModule(false);
    } else if (option === 'module') {
      setIsDescription(false);
      setIsModule(true);
    }
  }

  return (
    <div className='lg:flex pt-10'>
      <div className='shadow-2xl rounded-xl w-[280px] max-h-[500px]  overflow-hidden lg:w-[24%] ml-[5%]'>
        <div className='w-full'><img src={cyber} className='w-full'/></div>
        <div className='flex flex-col gap-y-3 py-3'>
          <h1 className='font-bold text-xl'>Data-Driven Strategies in Video Game Development</h1>
          <div className='flex justify-evenly'><FontAwesomeIcon icon={faGraduationCap} /> <p>157</p><p>Learners already enrolled</p></div>
          <p className='font-bold '>This free course includes:</p>
          <ul className='text-sm text-start pl-[70px] flex flex-col gap-y-1'>
            <li className='flex gap-x-2'><FontAwesomeIcon icon={faCheck} className='text-[16px]' /><p>1.5 Hours of learning</p></li>
            <li className='flex gap-x-2'><FontAwesomeIcon icon={faCheck} className='text-[16px]' /><p>CPD Accreditation</p></li>
            <li className='flex gap-x-2'><FontAwesomeIcon icon={faCheck} className='text-[16px]' /><p>Final Assessment</p></li>
          </ul>
          <button className='text-white font-bold bg-green-700 rounded-md w-[160px] mx-auto'> Start Course Now</button>
        </div>
      </div>
      <div className='w-[60%] ml-[5%] text-start flex flex-col gap-y-3 overflow-y: scroll'>
        <h1 className='font-bold text-2xl'>Data-Driven Strategies in Video Game Development</h1>
        <p className='font-bold'>Discover how to use player data to develop games and enhance the overall user experience in this free online course.</p>
        <p>The gaming industry relies heavily on data to drive decisions, improve user experiences, and create engaging games that keep players coming back for more. In this course, you’ll learn how to collect, analyse, and use player data to create immersive, engaging games. From A/B testing to heatmaps, we'll equip you with the tools to create unforgettable games. You’ll explore how data can enhance user experience and foster a thriving community.</p>
        <button className='text-white font-bold bg-green-700 rounded-md w-[160px] p-2'>Start Course Now</button>

        <div className='shadow-2xl'>
          <div className='flex justify-evenly'>
            <p onClick={() => { handleoption('description') }} className='text-[rgb(21,129,182)] font-bold cursor-pointer'>Course Description</p>
            <p onClick={() => { handleoption('module') }} className='text-[rgb(21,129,182)] font-bold cursor-pointer'>Course Modules</p>
          </div>
          <div >
            <div className={isDescription ? 'block' : 'hidden'}>
              <p className='p-3 text-md'>In gaming today, developers are no longer just creative minds; they've become data wizards, leveraging data-driven strategies to stay ahead in the industry. But what does that mean, and how does it shape the future of gaming? That’s where our course "Data-Driven Strategies in Video Game Development" comes in, providing you with the tools and skills needed to harness data and create incredible gaming experiences.

                Firstly, we introduce you to data-driven decision-making and how game developers use data. The course covers the importance of data and the challenges of adopting a data-driven approach. You’ll discover how to collect meaningful player data, handle it responsibly, and turn raw numbers into actionable insights while ensuring privacy. Additionally, you’ll learn how to analyse data using methods like A/B testing, predictive analytics, and player segmentation.

                Beyond game performance, the course explores how data can improve user experience and boost community engagement. You’ll learn how to enhance UX design through tools like heatmaps and player journey mapping. This course offers invaluable insights for game developers and data enthusiasts regardless of their experience level. By the end of this course, you'll understand how data influences all aspects of game development, from gameplay mechanics to player engagement. So, if you're ready to take your game development skills to the next level, join us today on this exciting journey.</p>
            </div>
            <div className={isModule ? 'block flex p-3' : 'hidden'}>
              <FontAwesomeIcon icon={faCheck} />

              <div className='w-[90%] ml-[5%]'>
                <p className='font-bold'>Module 1</p>
                <div>
                  <div>
                    <h2 className='font-bold'>Basics of Data-Driven Game Development</h2>
                    <p> This module explores how data-driven strategies can influence and optimise various aspects of video game development. You’ll learn methods for collecting, managing, and analysing g... </p>
                  </div>
                  <button className='text-white font-bold bg-green-700 rounded-md w-[100px] mx-auto my-3 p-1'>Start Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coursedetailpage