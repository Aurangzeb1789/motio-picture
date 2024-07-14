import AddToFavoriteButton from "@/components/AddToFavoriteButton";
import Caste from "@/components/Caste";
import SimilarMovies from "@/components/SimilarMovies";
import YoutubeVideo from "@/components/YoutubeVideo";
import Image from "next/image";

async function currentlyshowing(movie_id: any) {
  let response = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?&api_key=${process.env.API_KEY}`);
  let data = await response.json();
  return data;
}

async function movieDetail({ params: { id } }: any) {
  const newData = await currentlyshowing(id);
  return <>
    {/* Movie Detail Header */}
    <div className="mx-4 lg:mx-10 py-1 lg:py-2 flex items-end lg:items-center justify-between border-b border-b-gray-500 relative mb-4 overflow-hidden">
      <div className="flex items-center space-x-2 lg:space-x-4 py-1">
        <div className="w-0 h-0 mt-[17px]
             border-t-[8px]   sm:border-t-[10px]   md:border-t-[12px] border-t-transparent
             border-l-[16px]   sm:border-l-[20px]   md:border-l-[25px] border-l-red-600
             border-b-[8px]   sm:border-b-[10px]   md:border-b-[12px] border-b-transparent">
        </div>
        <h2 className="text-base sm:text-xl  md:text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize mt-4">Movie Detail : {newData.original_title}</h2>
      </div>

      <span className="w-[20%] h-1 bg-red-600 inline-block absolute left-0 -bottom-[10px] z-10" />
    </div>


    <div className="px-2 lg:px-10 py-2 no-scrollbar w-[full] space-y-8 overflow-hidden">

      <div className="m-2 flex flex-col lg:flex-row lg:items-start justify-center lg:justify-around">

        {/* Movie Image  */}
        <div className="flex w-[90vw] lg:w-[450px] cursor-pointer transform hover:scale-105 transition duration-200 ease-out">
          <Image src={`http://image.tmdb.org/t/p/original/${newData.poster_path}`} alt="" width={1920} height={1080} className=" rounded-lg" />
        </div>

        {/* Movie Detail  */}

        <div className="m-3 w-[full] lg:w-[50%] cursor-pointer">
          <h3 className="text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold my-5">{newData.original_title}</h3>
          <hr className="mb-3 border-gray-800" />
          <p className="text-neutral-500 max-w-lg text-sm tracking-wider my-4">{newData.overview}</p>

          {/* IMDB */}

          <div className="my-5 flex">
            {/* IMDB STYLE */}
            <span className="bg-[rgb(245,197,24)] text-black inline-block px-4 py-1 rounded-md font-bold text-[20px] tracking-wider mr-4">IMDB</span>
            {/* RATING */}
            <div className="flex">

              <div className="mr-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="ipc-icon ipc-icon--star sc-eb51e184-4 colZxX" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path></svg>
              </div>

              <div className="tracking-widest font-semibold mr-2">{(newData.vote_average).toFixed(1)} /10</div>

              <div className="inline-block">( {newData.vote_count} )</div>
            </div>
          </div>

          {/* GENRE  */}

          <div className="flex space-x-16 items-center lg:items-end py-2">
            <p className="text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize bg-clip-text text-lg">Genres</p>
            <div className="flex gap-y-3 lg:space-x-8 text-sm tracking-wider justify-between text-neutral-500 flex-wrap gap-x-3 ">
              {newData.genres.map((item: any) => (
                <div key={item.id} className="border border-gray-500 rounded-lg px-3 py-1"> {item.name}</div>
              ))}
            </div>
          </div>

          {/* TAG LINE  */}

          <div className="flex items-end space-x-4 lg:space-x-10 my-6">
            <p className="text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize bg-clip-text text-lg">Tag Lines</p>
            <p className="text-base tracking-wider text-neutral-500 lg:text-left text-center ">{newData.tagline}</p>
          </div>

          {/* RELEASED DATE  */}

          <div className="flex space-x-7 items-end my-6">
            <p className="text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize bg-clip-text text-lg">Released Date</p>
            <p className="text-green-600 font-semibold  text-left">{newData.release_date}</p>
          </div>

          <div>
            <AddToFavoriteButton movieId={id} moviename={newData.original_title} />
          </div>

        </div>
      </div>
    </div> 
 
    {/* --------------------------------------Cast Start Here ------------------------------- */}
    <div>
      <div className="mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <div className="flex items-center space-x-4">
          <h2 className=" text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-600 font-sans font-bold capitalize mt-10">Caste</h2>
        </div>
      </div>
      <Caste movieId={id} />
    </div>
    {/* -----------------------------------Cast End Here -------------------------------------------    */}


    {/* ---------------------------------------YouTube Start Here-------------------------------------- */}
    <div>
      <div className="mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <div className="flex items-start space-x-4">
          <h2 className=" text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-600 font-sans font-bold capitalize mt-2">Trailers & More</h2>
        </div>
      </div>
      <YoutubeVideo movieId={id} />
    </div>
    {/* ---------------------------------------YouTube Ends Here-----------------------------------------    */}


    {/* ---------------------------------------------Similiars Movie Start here-------------------------------- */}
    <div>
      <div className="mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">

        <div className="flex items-start space-x-4">
          <h2 className=" text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-600 font-sans font-bold capitalize mt-2">More Like This</h2>
        </div>
      </div>
      <SimilarMovies movieId={id} />

    </div>

    {/* -----------------------------------------------Similiars Movies Ends Here------------------------------------- */}

  </>
}

export default movieDetail;




