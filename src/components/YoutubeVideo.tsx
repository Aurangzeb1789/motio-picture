"use client"
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

function YoutubeVideo({movieId}:any)
{
   let [newData, setnewData] = useState([]);

    useEffect(()=>{
        async function currentlyshowing() {
            let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=a7254d75a3e4ef2c23e8d349f8f4cede`);
        
            let data = await response.json();
        
            setnewData(data.results);
        }
        currentlyshowing();
    },[]);

    const opts = {
        height: "300px",
        width: "100%",
      };
    
    return <>
               <div className="flex overflow-scroll no-scrollbar px-5 lg:px-10 py-5 space-x-3 lg:space-x-5">
            {newData.length === 0 ? <p className="text-center">Nothing To Show </p> :newData.map((item: any) => (
                <div className="flex-shrink-0 rounded-md border border-neutral-800 w-[380px] lg:w-[600px] " key={item.id}>
                    <YouTube videoId={item.key} opts={opts}/>
                </div>
            ))}

        </div>
    </>
}

export default YoutubeVideo;