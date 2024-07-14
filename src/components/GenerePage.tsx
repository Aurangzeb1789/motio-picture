import Image from "next/image";
import Link from "next/link";

async function currentlyshowing(genreId: any) {

  let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}`);

  let data = await response.json();
  return data.results;
}

async function GenerePage({ genreId }: any) {

  let newData = await currentlyshowing(genreId);

  return <>
  
    <div className="px-5 lg:px-10 py-5 no-scrollbar w-[full] space-y-8 ">

      {newData.map((item: any) => (
        <>
          <div className="m-3 flex items-center lg:gap-x-10 flex-col lg:flex-row overflow-hidden">

            <div className="flex w-[90vw] lg:w-[600px] lg:m-3 cursor-pointer transform hover:scale-105 transition duration-200 ease-out overflow-hidden">
              <Link href={`/moviedetail/${item.id}`}>
                <Image src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="" width={1920} height={1080} className=" rounded-lg" /></Link>
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

export default GenerePage;