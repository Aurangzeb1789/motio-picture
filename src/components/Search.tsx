"use client"
import { useRouter } from "next/navigation";


function Search()
{
     const router = useRouter();

     const handleKeyDown = (event:any)=>
         {
              if(event.key ==='Enter')
              {
               router.push(`/search?movie=${event.target.value}`);
               event.target.value =" ";
              }
         }

     return <>
              <div className="lg:w-[400px]">
              <input
          type="text"
          placeholder="What are you looking for ?"
          className="rounded-lg dark:border-neutral-600 w-[60vw] md:w-full dark:bg-neutral-950 placeholder:text-neutral-700 text-[13px] py-2 px-3 border-[1px] border-gray-400 focus:outline-none capitalize "
          onKeyDown={handleKeyDown}

        />  
              </div>
     </>
}
export default Search;