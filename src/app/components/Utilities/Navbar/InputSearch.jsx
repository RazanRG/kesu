"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {

  const searchRef = useRef()
  const router = useRouter()

  const handlerSearch = (event) => {
    const keyword = searchRef.current.value

    if(!keyword || keyword.trim() == "") return

    if(event.key === "Enter" || event.type === "click") {
        event.preventDefault()    
        router.push(`/search/${keyword}`)
    }
}

    return (
      <div className="relative">
        <input placeholder="cari apa..." className="w-full p-2 rounded" ref={searchRef} onKeyDown={handlerSearch} />
        <button className="absolute top-2 end-2" onClick={handlerSearch}>
        <MagnifyingGlass size={24} />
        </button>
      </div>
    )
}

export default InputSearch