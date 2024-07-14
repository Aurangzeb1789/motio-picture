"use client"
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

function LoginButton({ session }: any) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return <>
        <div>
            <div className=" cursor-pointer hover:scale-110 transition-all ease-in-out duration-100" onClick={toggleMenu}>
                <img src={`${session.user.image}`} alt="user" className="w-[35px] h-[35px] rounded-full" />
            </div>



            <div
                className={`fixed top-0 right-0 w-64 h-full bg-slate-800 shadow-lg transform rounded-2xl ${isOpen ? '-translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300`}
            >
                <div className='flex justify-between px-2 py-[21px] items-center font-semibold border-b border-b-gray-400'>
                    <div>
                        <p className='bg-clip-text text-transparent bg-gradient-to-b from-red-600 to-red-400 font-sans font-bold capitalize'>{session.user.name}</p>
                    </div>
                    <div className="cursor-pointer" onClick={toggleMenu}>
                        <img src={`${session.user.image}`} alt="user" className="w-[35px] h-[35px] rounded-full" />
                    </div>
                </div>

                <nav className="p-6 my-3">
                    <ul>
                        <li className="mb-4 border-b border-gray-600 ">
                            <Link href={{ pathname: "/viewmore", query: {title: "favorite"}}} className="text-gray-50 hover:text-gray-400">Favourite List</Link>
                        </li>
                        <li className="mb-4 border-b border-gray-600">
                            <a href="#" className="text-gray-50 hover:text-gray-400">Watch Later</a>
                        </li>
                        <li className="mb-4 border-b border-gray-600">
                            <a href="#" className="text-gray-50 hover:text-gray-400">Dowloads</a>
                        </li>
                        <li className="mb-4 border-b border-gray-600">
                            <a href="#" className="text-gray-50 hover:text-gray-400">History</a>
                        </li>
                    </ul>
                </nav>

                <div className='h-[57%] flex flex-col justify-end'>
                    <p className=' bg-red-500 text-center tracking-widest rounded-xl py-2 cursor-pointer hover:bg-red-700' onClick={()=>
                        {
                            signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL })
                        }
                    }>Logout</p>
                </div>

            </div>



        </div>
    </>
}

export default LoginButton;


// "request_token":"68e6616a8f431e27799766e214e4893885df4653" (Approved Token Id)





// {"request_token": "2781ac8d92ea981ad88c194ca9f10e0b95c13719"} (New Token Id)


// "session_id": "4e6a7af327b2774b5d50004f993ea0e5919b109d"