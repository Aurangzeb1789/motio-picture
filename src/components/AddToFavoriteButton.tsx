"use client"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import {addToFavorites} from "./AddToFavorite"


function AddToFavoriteButton({ movieId, moviename }: any) {
    const { toast } = useToast()

    // console.log(movieId)

    return <>
        <div className="mt-10  flex overflow-hidden flex-wrap gap-6">
            <Button
                variant="my"
                className=" tracking-widest font-semibold"
                onClick={() => {

                    toast({
                        title: moviename,
                        description: "Movie Added To Favorite",
                    })
                    const newFun = async () => {
                        let data = await addToFavorites(movieId);

                    }

                    newFun();

                }}
            >
                Add To Favorite
            </Button>

            <Button
                variant="my"
                className=" tracking-widest font-semibold"
                onClick={() => {
                    toast({
                        description: "Movie Added To Favorite",
                    })
                }}
            >
                Add To WatchList
            </Button>

            <Button
                variant="my"
                className=" tracking-widest font-semibold"
                onClick={() => {
                    toast({
                        description: "Movie Added To Favorite",
                    })
                }}
            >
                Dowload
            </Button>
        </div>
    </>
}

export default AddToFavoriteButton;
