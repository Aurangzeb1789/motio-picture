import Image from "next/image";
import Link from "next/link"

async function currentlyshowing() {
  let response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=a7254d75a3e4ef2c23e8d349f8f4cede');

  let data = await response.json();

  return data.results;
}

async function Upcoming({ vertical }: any) {

  let newData = await currentlyshowing();

  return <>
    <div className="">
      {/* Upcoming Playing Heading */}
      <div className="mx-5 lg:mx-10 py-1 lg:py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
        {vertical ? null : <>
          <div className="flex items-center space-x-4">
            <div className="w-0 h-0 
                      border-t-[8px] border-t-transparent
                      border-l-[16px] border-l-red-600
                      border-b-[8px] border-b-transparent">
            </div>
            <h2 className="text-sm uppercase font-bold tracking-wider">Upcoming</h2>
          </div>

          <Link href={{ pathname: "/viewmore", query: { title: "upcoming" } }}
            className="bg-gray-800 text-xs tracking-widest text-white uppercase px-5 py-2 rounded-lg border-indigo-600 font-semibold hover:bg-black duration-200 transition-all ease-out"> View more </Link>
        </>
        }

        <span className="w-[10%] h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
      </div>

      {/* Now Playing Images  */}

      {vertical ? (
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

        </div>) : (

        <div className="flex overflow-x-auto no-scrollbar space-x-6 h-[350px] px-5 lg:px-10 py-5">
          {newData.map((item: any) => (
            <Link href={`/moviedetail/${item.id}`}>
              <div className="w-[200px] flex-shrink-0 rounded">
                <Image src={`http://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" width={1920} height={1080} className=" rounded-lg relative transform hover:scale-110 transition-all  ease-out  cursor-pointer " />
              </div>
            </Link>
          ))}

        </div>
      )}

    </div>

  </>
}

export default Upcoming;