"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button"
import { removeFromFavorites } from "./AddToFavorite";


function FavoriteList() {
  const [newData, setnewData] = useState([])
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {

    const currentlyshowing = async () => {
      let response = await fetch(`https://api.themoviedb.org/3/account/21352042/favorite/movies?language=en-US&page=1&session_id=4e6a7af327b2774b5d50004f993ea0e5919b109d&sort_by=created_at.asc&api_key=a7254d75a3e4ef2c23e8d349f8f4cede`);

      let data = await response.json();
      setnewData(data.results);
    }

    currentlyshowing();

  }, [fetchData])

  return <>
    <div className=" mx-5 lg:mx-10 py-1 lg:py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
      <span className="w-[10%] h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
    </div>

    {newData.length === 0 ? <p className="text-center font-semibold text-5xl my-8">No Movie Add To Favorite List</p> :

      <div className="px-5 lg:px-10 py-5 no-scrollbar w-[full] space-y-8 ">

        {newData.map((item: any) => (
          <>
            <div className="m-3 flex items-center lg:gap-x-10 flex-col lg:flex-row overflow-hidden">
              <div className="flex w-[90vw] lg:w-[600px] lg:m-3 cursor-pointer transform hover:scale-105 transition duration-200 ease-out overflow-hidden">
                <Link href={`/moviedetail/${item.id}`}>
                  <Image src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="No Picture" width={1920} height={1080} className=" rounded-lg" /></Link>
              </div>
              <div className="m-3 w-[full]  lg:w-[50%] cursor-pointer">
                <h3 className="text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold my-2">{item.title}</h3>
                <hr className="mb-3 border-gray-800" />
                <p className="text-neutral-500 lg:max-w-lg my-2 text-sm">{item.overview}</p>

                <div className="mx-auto my-8">
                <Button variant="destructive" onClick={() => {
              removeFromFavorites(item.id)
              setFetchData(prevState => !prevState)
            }

            }> Remove From favorite</Button>
            </div>
              </div>
                   
             


            </div>

           
          </>
        ))}
      </div>
    }
  </>
}

export default FavoriteList;