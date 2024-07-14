import Image from "next/image";


async function currentlyshowing(movieId: any) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${process.env.API_KEY}`);

    let data = await response.json();

    return data.cast;
}


async function Caste({ movieId }: any) {
    let newData = await currentlyshowing(movieId);
    return <>

        <div className="flex overflow-scroll no-scrollbar px-5 lg:px-10 py-5 space-x-5">

            {newData.map((item: any) => (
                <div className="w-48 flex-shrink-0 rounded-md border border-neutral-800">
                    <Image src={`http://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" width={1920} height={1080} className=" cursor-pointer rounded-lg" />
                    <h6 className=" font-semibold my-1 px-2">{item.name}</h6>
                    <p className="text-neutral-500 text-sm px-2">{item.character}</p>
                </div>
            ))}
        </div>
    </>
}

export default Caste;