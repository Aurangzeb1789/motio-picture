import GenerePage from "@/components/GenerePage";


function genre({ params: { genereid }, searchParams: { genre } }: any) {
        
    return <>
        <div className="">
            <div className="mx-5 lg:mx-10 py-2 flex items-center justify-between border-b border-b-gray-500 relative mb-4">
                <div className="flex items-center space-x-4">
                    <div className="w-0 h-0 mt-2 lg:mt-8
                       border-t-[8px]   sm:border-t-[10px]   md:border-t-[12px] border-t-transparent
             border-l-[16px]   sm:border-l-[20px]   md:border-l-[25px] border-l-red-600
             border-b-[8px]   sm:border-b-[10px]   md:border-b-[12px] border-b-transparent">
                    </div>
                    <h2 className=" text-lg md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold capitalize mt-2 lg:mt-6">Genre : {genre}</h2>
                </div>

                <span className="w-[20%] h-1 bg-red-600 inline-block absolute left-0 -bottom-[1.5px] z-10" />
            </div>
        </div>

        <GenerePage genreId={genereid} />
    </>

}

export default genre;