import AnimeList from "@/app/components/AnimeList"

const page = async () => {
const response = await fetch(`${process.env.API_URL}/komiku`)
const anime = await response.json()

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