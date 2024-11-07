
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBriefcase, faCoins} from '@fortawesome/free-solid-svg-icons';
import { faLeanpub } from '@fortawesome/free-brands-svg-icons'; 


function Catnavbar() {

  // const router = useRouter();
  // const { pathname } = router;

  return (
    <div className='mt-20 '>
        <nav className='flex rounded-md h-[30px] bg-[rgb(243,246,247)] justify-between w-[80%] ml-[10%] md:w-[50%] md:ml-[25%] md:h-[40px] md:rounded-full text-sm lg:text-lg pr-6'>
            <div className='w-[120px] lg:w-[220px] bg-[rgb(0,155,93)] w-[80px] text-white rounded-2xl flex gap-x-2 justify-center items-center text-[17px]'><FontAwesomeIcon icon={faLeanpub} />
               <p className='cursor-pointer'><a href={"/"}>Learn<span className='hidden lg:inline-block'>& Get Certificates</span></a></p> </div>
            <div className='flex gap-x-2 pt-1 flex items-center text-[17px]'><FontAwesomeIcon icon={ faBriefcase} /><p><a href={"/careerPage"}><span className='hidden lg:inline-block'>Build Your</span>Career</a></p></div>
            <div className='flex gap-x-2 pt-1 flex items-center text-[17px]'> <FontAwesomeIcon icon={faCoins} /><p><a href={"/earnPage"}>Earn <span className='hidden lg:inline-block'>On Alison</span></a></p></div>
             {/* <div
        className={`w-[120px] lg:w-[220px] rounded-2xl flex gap-x-2 justify-center items-center text-[17px] ${
          pathname === '/' ? 'bg-[rgb(0,155,93)] text-white' : 'text-black'
        }`}
        
      >
        <FontAwesomeIcon icon={faLeanpub} />
        <p className='cursor-pointer'>
          <Link href="/">Learn<span className='hidden lg:inline-block'>& Get Certificates</span></Link>
        </p>
      </div>
      
      <div
        className={`flex gap-x-2 pt-1 items-center text-[17px] ${
          pathname === '/careerPage' ? 'bg-[rgb(0,155,93)] text-white' : 'text-black'
        }`}
      
      >
        <FontAwesomeIcon icon={faBriefcase} />
        <p>
          <Link href="/careerPage"><span className='hidden lg:inline-block'>Build Your</span>Career</Link>
        </p>
      </div>
      
      <div
        className={`flex gap-x-2 pt-1 items-center text-[17px] ${
          pathname === '/earnPage' ? 'bg-[rgb(0,155,93)] text-white' : 'text-black'
        }`}
    
      >
        <FontAwesomeIcon icon={faCoins} />
        <p>
          <Link href="/earnPage">Earn <span className='hidden lg:inline-block'>On Alison</span></Link>
        </p>
      </div> */}

        </nav>
    </div>
  )
}

export default Catnavbar