import AnimeList from "@/app/components/AnimeList"
import { getKomikRespo } from "./libs/api-libs"

const page = async () => {
const anime = await getKomikRespo("komiku")

  return (
     <div>
       <div className="flex justify-between items-center p-4">
         <h1 className="text-2xl font-bold">Terbaru</h1>
       </div>
         <AnimeList api={anime}/>
      </div>
  )
}

export default page