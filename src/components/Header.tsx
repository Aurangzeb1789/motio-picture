import Image from "next/image";
import Link from "next/link";
import Genere from "./Genere";
import Search from "./Search";
import ModeToggle from "./Mode";
import SignUp from "./Signup";



function Header()
{
    
    return <>
        <div className="sticky z-50 top-0 w-full  py-5 px-3 bg-[#3F3D4B] transition-colors opacity-90 dark:bg-black dark:opacity-80 overflow-hidden md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center mb-6 border-b pb-1 border-gray-700 md:border-none md:mb-0">
            <Link href={"/"}>
              <div>
                <Image src="/img/logo-dark.png"
                 width={120} height={100} 
                 alt='Logo'
                 className=" cursor-pointer  w-40 h-auto"
                 />
              </div>
              </Link>

              <div className="md:hidden">
                       <SignUp/>
              </div>
        </div>           
              <div className="flex justify-between md:space-x-6 md:items-center ">
                    <Genere/>
                    <Search/>
                    <ModeToggle/>
                    <span className="hidden md:block">
                    <SignUp/>
                    </span>      
               </div>
            </div>
    </>
}
export default Header;