import Image from "next/image";
import Link from "next/link"

async function currentlyshowing(movieId:any) {
  let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1&api_key=a7254d75a3e4ef2c23e8d349f8f4cede`);

  let data = await response.json();

  return data.results;
}

async function SimilarMovies({movieId, vertical }: any) {
 
  let newData = await currentlyshowing(movieId);

  return <>
    <div className="">
        <div className="flex overflow-x-auto no-scrollbar space-x-6 h-[350px] px-5 lg:px-10 py-5">
          {newData.map((item: any) => (
            <Link href={`/moviedetail/${item.id}`} key={item.id}>
            <div  className="w-[200px] flex-shrink-0 rounded">
            <Image src={`http://image.tmdb.org/t/p/original/${item.poster_path}`} alt="" width={1920} height={1080} className=" rounded-lg relative transform hover:scale-110 transition-all  ease-out  cursor-pointer "/>
            </div>
            </Link>
          ))}
        </div>
    </div>
  </>
}

export default SimilarMovies;