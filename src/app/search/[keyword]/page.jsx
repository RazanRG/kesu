import AnimeList from "@/app/components/AnimeList"
import { getKomikRespo } from "@/app/libs/api-libs"

const page = async ({ params }) => {
const { keyword } = params
const decodeKeyword = decodeURI(keyword)
const searchKomik = await getKomikRespo("komiku", `s=${decodeKeyword}`)

  return (
     <div>
       <div className="flex justify-between items-center p-4">
         <h1 className="text-2xl font-bold">Pencarian Untuk {decodeKeyword}...</h1>
       </div>
         <AnimeList api={searchKomik}/>
      </div>
  )
}

export default page