'use client'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'


function CarouselScreen() {
  let [newData, setnewData] = useState([]);

  useEffect(() => {

    async function discover() {
      let response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=a7254d75a3e4ef2c23e8d349f8f4cede');

      let data = await response.json();

      setnewData(data.results)
    }


    discover();
  }, [])



  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])


  return <>
    <div className=' overflow-hidden cursor-pointer  relative' ref={emblaRef}>
      <div className='flex'>
        {
          newData.map((item: any) => (
            <div key={item.id} className='flex-full relative'>
              <Image src={`http://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt="Picture of the author" width={1920} height={1080} />
              <div className="md:inline absolute top-0 pt-10 sm:pt-32 lg:pt-40  xl:pt-72 left-0 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white">
                <h2 className=" text-2xl sm:text-4xl font-bold max-w-xl">{item.title}</h2>
                <p className=" text-base max-w-xl line-clamp-3">{item.overview}</p>
              </div>
            </div>
          ))

        }
      </div>
      <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30 to-gray-300 dark:to-[#121212]" />
    </div>



  </>
}

export default CarouselScreen;