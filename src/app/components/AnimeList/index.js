import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-2 px-4">
      {api.data.map(data => {
         return (
          <Link href={`/${data.param}`} className="corsor-pointer">
        <Image src={data.thumbnail} alt="..." width={350} height={350} className="w-full max-h-64 object-cover"/>
        <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
        <h2 className="text-sm text-gray-500 p-4">{data.description}</h2>
        <div className="mt-1.5 sm:mt-0">
          <p className="font-medium">{data.latest_chapter}</p>
        </div>
       </Link>
         )
      })}
    </div>
  )
}

export default AnimeList