import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";


interface Genre {
    id: number;
    name: string;
}

interface GenresResponse {
    genres: Genre[];
}



async function life(): Promise<Genre[]> {
    let response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY }`);
    let data: GenresResponse = await response.json();
    return data.genres;
}



async function Genere() {

    let newData = await life();
    return <>
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white">Genre <span>🢓</span> </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Select Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {newData.map((item) =>
                    <DropdownMenuItem key={item.id}>
                        <Link href={`/generemovies/${item.id}?genre=${item.name}`}>{item.name} </Link>
                    </DropdownMenuItem>
                )}

            </DropdownMenuContent>
        </DropdownMenu>

    </>
}

export default Genere;