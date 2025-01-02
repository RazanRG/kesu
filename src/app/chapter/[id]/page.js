import { getKomikRespo } from "@/app/libs/api-libs"
import Image from "next/image"

const page = async ({ params: { id } }) => {
    const komik = await getKomikRespo(`komiku/chapter/${id}`)
        console.log(komik.data)

    return (
      <div>
       {komik.data.map(data => {
         return (
        <Image src={data} alt="..." width={350} height={350} />
         )
        })}
      </div>
    )
}

export default page