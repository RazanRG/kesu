import { getKomikRespo } from "@/app/libs/api-libs"
import Image from "next/image"

const Page = async ({ params: { id } }) => {
    const komik = await getKomikRespo(`komiku/${id}`)

    return (

        <>
            <div className="pt-4 px-4">
                <h3 className="text-2xl text-color-dark">{komik.data.title}</h3>
                </div>
            <div className="pt-4 px-4 flex gap-2 text-color-dark overflow-x-auto">
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-dark">
                <Image
                    src={komik.data.thumbnail}
                    alt="..."
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{komik.data.synopsis}</p>
            </div>
            

          <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="odd:bg-color-accent odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        CHAPTER
                        </th>
                        <td className="px-16 py-4">
                            <a href="#" className="font-bold text-blue-600 dark:text-blue-500 hover:underline">ACTION</a>
                        </td>
                    </tr>
                </tbody>
            </table>
            {komik.data.chapters.map(data => {
         return (
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.chapter}
                        </th>
                        <td className="px-16 py-4">
                            <a href={`/chapter/${data.param}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">VIEW</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>        
         )
        })}
          </div>
     </>

    )
}

export default Page