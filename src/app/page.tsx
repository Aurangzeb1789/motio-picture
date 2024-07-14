import CarouselScreen from "@/components/Carousel";
import NowPlaying from "@/components/NowPlaying";
import Upcoming from "@/components/Upcoming";
import Popular from "@/components/Popular";
import TopRated from "@/components/Toprated";
import Trending from "@/components/Trending";




function Home() {
  return <>
    <CarouselScreen />
    <div className="my-2 lg:my-5">
    <Trending />
    </div>
    <div className="my-2 lg:my-5">
    <NowPlaying />
    </div>
    <div className="my-2 lg:my-5">
    <TopRated />
    </div>
    <div className="my-2 lg:my-5">
    <Popular />
    </div>
    <div className="my-2 lg:my-5">
    <Upcoming />
    </div>

  </>
}

export default Home;

