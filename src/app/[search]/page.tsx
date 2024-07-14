import Image from "next/image";
import Link from "next/link";

async function currentlyshowing(movie: any) {
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1'&api_key=${process.env.API_KEY}`);

  let data = await response.json();

  return data.results;
}

async function search({ searchParams: { movie } }: any) {
  let newData = await currentlyshowing(movie);

  return <> 
    <div className="">
      <div className="mx-5 lg:mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-0 h-0 mt-2 lg:mt-8
                       border-t-[8px]   sm:border-t-[10px]   md:border-t-[12px] border-t-transparent
             border-l-[16px]   sm:border-l-[20px]   md:border-l-[25px] border-l-red-600
             border-b-[8px]   sm:border-b-[10px]   md:border-b-[12px] border-b-transparent">
          </div>
          <h2 className=" text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize mt-2 lg:mt-6">Search : {movie}</h2>
        </div>

        <span className="w-[20%] h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
      </div>
    </div>


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
            </div>
          </div>
        </>
      ))}
    </div>
  </>
}

export default search;