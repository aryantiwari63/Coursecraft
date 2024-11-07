import React from 'react'
import footerlogo from '../images/footerlogo.png';


function Footer() {
    return (
        <div className=" bg-[rgb(11,36,65)]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 px-16  gap-x-16">
                <ul className=" w-[200px] text-[rgb(210,216,192)] text-[14px]">
                    <h2 className="my-4 sm:mb-0 text-[16px] font-bold text-white">FREE ONLINE COURSE CATEGORIES</h2>
                    <li className="hover:underline cursor-pointer">IT</li>
                    <li className="hover:underline cursor-pointer">Health</li>
                    <li className="hover:underline cursor-pointer">Language</li>
                    <li className="hover:underline cursor-pointer">Business</li>
                    <li className="hover:underline cursor-pointer">Management</li>
                    <li className="hover:underline cursor-pointer">Sales & Marketing</li>
                </ul>



                <ul className=" w-[200px] text-[rgb(210,216,192)] text-[14px]">
                    <h2 className="my-4 text-[16px] font-bold text-white">DISCOVER MORE</h2>
                    <li className="hover:underline cursor-pointer">Aptitude Test</li>
                    <li className="hover:underline cursor-pointer">Verbal Reasoning Test</li>
                    <li className="hover:underline cursor-pointer">Numerical  Reasoning Test</li>
                    <li className="hover:underline cursor-pointer">Abstract  Reasoning Test</li>
                    <li className="hover:underline cursor-pointer">Free Personality Test</li>
                </ul>

                <ul className=" w-[200px] text-[rgb(210,216,192)] text-[14px]">
                    <h2 className="my-4 text-[16px] font-bold text-white">LEARN ABOUT ALISON</h2>
                    <li className="hover:underline cursor-pointer">About Us</li>
                    <li className="hover:underline cursor-pointer">Blog</li>

                </ul>

            </div>

            <hr className="mx-5 my-6 " />

           <div className="md:flex md:justify-between py-3">
            <div className="flex gap-x-4 my-3 ml-6">
                <img src={footerlogo} className="w-40 h-18" />
                <div className="text-white flex flex-col gap-y-2">
                    <div className="flex gap-x-4 cursor-pointer"><div className="h-5 w-5 bg-[rgb(11,36,65)] rounded-full border-2 border-white "><p className="text-sm pl-1 ">?</p></div>  FAQs</div>
                    <div className="flex gap-x-4 cursor-pointer"><div className="h-5 w-5 bg-[rgb(11,36,65)] rounded-full border-2 border-white "><p className="text-sm pl-1 ">?</p></div>Customer Support</div>
                </div>
               
            </div>
            <div className="text-[rgb(210,216,192)] flex gap-x-8 justify-around md:mr-14"><p className="hover:underline cursor-pointer">privacy</p> <p className="hover:underline cursor-pointer">Terms</p> <p className="hover:underline cursor-pointer">Cookie Policy</p></div>
         </div>


        </div>
    )
}

export default Footer