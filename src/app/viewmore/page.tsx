import Popular from "@/components/Popular";
import TopRated from "@/components/Toprated";
import Trending from "@/components/Trending";
import Upcoming from "@/components/Upcoming";
import NowPlaying from "@/components/NowPlaying";
import FavoriteList from "@/components/FavoriteList";



function viewmore({ searchParams: { title } }: any) {


    return <>
        <div className="flex items-end lg:items-center">
            <div className="w-0 h-0 mt-8 ml-6 lg:ml-10
                        border-t-[12px] border-t-transparent
                        border-l-[25px] border-l-red-600
                        border-b-[12px] border-b-transparent">
            </div>
            <h2 className="px-5 text-lg sm:text-xl md:text-2xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize mt-6">{title}</h2>
        </div>

        {title === 'trending' && <Trending vertical={true} />}
        {title === 'now playing' && <NowPlaying vertical={true} />}
        {title === 'top rated' && <TopRated vertical={true} />}
        {title === 'popular' && <Popular vertical={true}/>}
        {title === 'upcoming' && <Upcoming  vertical={true} />}
        {title === 'favorite' && <FavoriteList />}
        
        

    </>

}
export default viewmore;




